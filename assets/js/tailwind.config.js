tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', 'sans-serif'],
            },
            colors: {
                'sudu-main': '#011916',
                'sudu-sec': '#35E5A2',
                'sudu-accent': '#F8FFFE',
                brand: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#35E5A2', // Updated to secondary
                    500: '#2ec28b', // Slightly darker variant
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#011916', // Updated to main
                    950: '#002104',
                },
                dark: {
                    bg: '#011916', // Updated to main
                    surface: '#004708',
                    border: '#35E5A2'
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #35E5A233 0deg, #01191600 360deg)',
            }
        }
    }
}
