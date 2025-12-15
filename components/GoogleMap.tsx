import React, { useEffect, useRef, useState } from 'react';

interface GoogleMapProps {
  origin?: string;
  destination?: string;
  waypoints?: string[];
  routeColor?: string;
  darkMode?: boolean;
  height?: string;
  showControls?: boolean;
  onRouteCalculated?: (distance: number, duration: number) => void;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export const GoogleMap: React.FC<GoogleMapProps> = ({
  origin,
  destination,
  waypoints = [],
  routeColor = '#f97316',
  darkMode = true,
  height = '100%',
  showControls = true,
  onRouteCalculated
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [directionsService, setDirectionsService] = useState<any>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // Dark mode map styles
  const darkMapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#0f172a' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#0f172a' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#94a3b8' }] },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#1e293b' }, { lightness: -20 }]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#64748b' }]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#0c4a6e' }]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#64748b' }]
    }
  ];

  // Load Google Maps script
  useEffect(() => {
    // Global Auth Failure Handler
    (window as any).gm_authFailure = () => {
      console.error("Google Maps Auth Failure");
      setError("Google Maps Kimlik Doğrulama Hatası! (API Key geçersiz veya domain kısıtlaması hatalı)");
    };

    if (window.google) {
      setIsLoaded(true);
      return;
    }

    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE' || apiKey === '') {
      setError('Google Maps API key bulunamadı. Lütfen .env.local dosyasında veya Vercel ayarlarında VITE_GOOGLE_MAPS_API_KEY değerini kontrol edin.');
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,directions&callback=initMap`;
    script.async = true;
    script.defer = true;
    
    window.initMap = () => {
      console.log("Google Maps loaded successfully");
      setIsLoaded(true);
    };

    script.onerror = () => {
      console.error("Google Maps script load error");
      setError('Google Maps script dosyası yüklenemedi. Ağ bağlantısını veya API key\'i kontrol edin.');
    };

    document.head.appendChild(script);

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
      // Cleanup global handler
      delete (window as any).gm_authFailure;
    };
  }, [apiKey]);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.google) return;

    try {
      console.log("Initializing Map...");
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 6,
        center: { lat: 39.9334, lng: 32.8597 }, // Ankara center
        styles: darkMode ? darkMapStyle : [],
        disableDefaultUI: !showControls,
        zoomControl: showControls,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: showControls,
      });

      setMap(mapInstance);

      const directionsServiceInstance = new window.google.maps.DirectionsService();
      const directionsRendererInstance = new window.google.maps.DirectionsRenderer({
        map: mapInstance,
        suppressMarkers: false,
        polylineOptions: {
          strokeColor: routeColor,
          strokeWeight: 6,
          strokeOpacity: 0.8,
        },
      });

      setDirectionsService(directionsServiceInstance);
      setDirectionsRenderer(directionsRendererInstance);
      console.log("Map initialized successfully");
    } catch (err) {
      console.error("Map initialization error:", err);
      setError(`Harita başlatılırken hata oluştu: ${err}`);
    }
  }, [isLoaded, darkMode, routeColor, showControls]);

  // Calculate and display route
  useEffect(() => {
    if (!directionsService || !directionsRenderer || !origin || !destination) return;

    console.log(`Calculating route: ${origin} -> ${destination}`);
    
    const request: any = {
      origin,
      destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
      unitSystem: window.google.maps.UnitSystem.METRIC,
    };

    if (waypoints.length > 0) {
      request.waypoints = waypoints.map(wp => ({ location: wp, stopover: true }));
    }

    directionsService.route(request, (result: any, status: any) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
        
        const route = result.routes[0];
        const leg = route.legs[0];
        const distance = leg.distance.value / 1000; // km
        const duration = leg.duration.value / 60; // minutes
        
        console.log(`Route calculated: ${distance}km, ${duration}min`);

        if (onRouteCalculated) {
          onRouteCalculated(distance, duration);
        }
      } else {
        console.error('Route calculation failed:', status);
        setError(`Rota hesaplanamadı: ${status}. Adresleri kontrol edin veya API Key'de 'Global Directions API' açık mı bakın.`);
      }
    });
  }, [directionsService, directionsRenderer, origin, destination, waypoints, onRouteCalculated]);

  if (error) {
    return (
      <div className="w-full h-full bg-slate-900 border-2 border-red-500/50 flex items-center justify-center text-red-200 p-4 text-center rounded-lg">
        <div>
          <p className="font-bold mb-2 text-xl">⚠️ Harita Hatası</p>
          <p className="text-sm font-mono bg-black/50 p-2 rounded">{error}</p>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-full bg-slate-900 flex items-center justify-center rounded-lg border border-slate-700">
        <div className="text-brand-muted text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-orange mx-auto mb-2"></div>
          <p className="text-sm">Harita yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={mapRef} 
      style={{ height, width: '100%' }}
      className="rounded-lg overflow-hidden bg-slate-800" // Added bg color to see connection issues
    />
  );
};


