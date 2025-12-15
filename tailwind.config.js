/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#0f172a',    // Slate 900
                    card: '#1e293b',    // Slate 800
                    orange: '#f97316',  // Orange 500
                    text: '#f1f5f9',    // Slate 100
                    muted: '#94a3b8',   // Slate 400
                }
            }
        },
    },
    plugins: [],
}
