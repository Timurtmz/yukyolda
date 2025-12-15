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
  const [logs, setLogs] = useState<string[]>([]); // Visual debug logs

  const addLog = (msg: string) => setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${msg}`]);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';

  // Dark mode map styles is omitted for brevity, keeping same logic...
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
    addLog("Component mounted. Checking API Key...");

    // Global Auth Failure Handler
    (window as any).gm_authFailure = () => {
      console.error("Google Maps Auth Failure");
      addLog("Auth Failure Triggered!");
      setError("Google Maps Kimlik Doğrulama Hatası! (API Key geçersiz veya domain kısıtlaması hatalı)");
    };

    if (window.google) {
      addLog("window.google already exists");
      setIsLoaded(true);
      return;
    }

    if (!apiKey || apiKey === 'YOUR_GOOGLE_MAPS_API_KEY_HERE' || apiKey === '') {
      addLog("API Key missing");
      setError('Google Maps API key bulunamadı. Lütfen .env.local dosyasında veya Vercel ayarlarında VITE_GOOGLE_MAPS_API_KEY değerini kontrol edin.');
      return;
    }

    addLog(`Loading script with key starting: ${apiKey.substring(0, 5)}...`);

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places,directions&callback=initMap`;
    script.async = true;
    script.defer = true;

    window.initMap = () => {
      addLog("initMap callback fired!");
      setIsLoaded(true);
    };

    script.onerror = () => {
      addLog("Script load error!");
      setError('Google Maps script dosyası yüklenemedi. Ağ bağlantısını veya API key\'i kontrol edin.');
    };

    document.head.appendChild(script);

    return () => {
      if (window.initMap) {
        delete window.initMap;
      }
      delete (window as any).gm_authFailure;
    };
  }, [apiKey]);

  // Initialize map
  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.google) {
      if (isLoaded && !mapRef.current) addLog("Loaded but no ref");
      return;
    }

    try {
      addLog("Initializing Map Instance...");
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

      addLog("Map Instance created.");
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
      addLog("Services initialized.");
    } catch (err) {
      addLog(`Map Init Error: ${err}`);
      setError(`Harita başlatılırken hata oluştu: ${err}`);
    }
  }, [isLoaded, darkMode, routeColor, showControls]);

  // Calculate and display route
  useEffect(() => {
    if (!directionsService || !directionsRenderer || !origin || !destination) return;

    addLog(`Routing: ${origin} -> ${destination}`);

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
        addLog("Route OK! Rendering...");

        const route = result.routes[0];
        const leg = route.legs[0];
        const distance = leg.distance.value / 1000; // km
        const duration = leg.duration.value / 60; // minutes

        if (onRouteCalculated) {
          onRouteCalculated(distance, duration);
        }
      } else {
        console.error('Rota hesaplanamadı:', status);
        addLog(`Route Error: ${status}`);
        setError(`Rota hesaplanamadı: ${status}. Adresleri kontrol edin veya API Key'de 'Global Directions API' açık mı bakın.`);
      }
    });
  }, [directionsService, directionsRenderer, origin, destination, waypoints, onRouteCalculated]);

  // Error State
  if (error) {
    return (
      <div className="w-full h-full bg-slate-900 border-2 border-red-500/50 flex flex-col items-center justify-center text-red-200 p-4 text-center rounded-lg relative">
        <div className="z-10 bg-black/80 p-4 rounded">
          <p className="font-bold mb-2 text-xl">⚠️ Harita Hatası</p>
          <p className="text-sm font-mono mb-4">{error}</p>
          <div className="text-left text-xs text-yellow-300 border-t border-gray-600 pt-2">
            <p className="font-bold">Debug Logs:</p>
            {logs.slice(-5).map((l, i) => <div key={i}>{l}</div>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Visual Debug Overlay - Temporary */}
      <div className="absolute top-0 left-0 z-50 bg-black/70 text-green-400 text-xs p-2 max-w-[300px] pointer-events-none">
        <p className="font-bold text-white mb-1">Harita Durumu:</p>
        {logs.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-gray-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand-orange"></div>
        </div>
      )}

      <div
        ref={mapRef}
        style={{ height, width: '100%' }}
        className="rounded-lg overflow-hidden bg-fuchsia-900" // Magenta to debug visibility
      />
    </div>
  );
};


