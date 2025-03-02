import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f0e6ff',
      100: '#d1baff',
      200: '#b18eff',
      300: '#9262ff',
      400: '#7536ff',
      500: '#5a0ae6',
      600: '#4c08b4',
      700: '#3d0682',
      800: '#2e0352',
      900: '#1d0123',
    },
  },
  components: {
    Card: {
      baseStyle: {
        container: {
          borderRadius: 'md',
          transition: 'all 0.3s ease',
          _hover: {
            transform: 'translateY(-5px)',
            boxShadow: 'xl',
          },
        },
      },
    },
  },
});

export default theme;