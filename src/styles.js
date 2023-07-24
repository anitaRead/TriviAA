import { Platform } from 'react-native';

// Global styles to be used throughout the app

export const Colors = {
  primary: '#FFCC00',
  secondary: '#000000',
  background: '#FFFFFF',
  shadow: 'gray',
};

export const Fonts = {
  heading: {
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
    fontWeight: 'bold',
    fontSize: 25,
  },
  subHeading: {
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
    fontWeight: 'bold',
    fontSize: 18,
  },
  body: {
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
    fontSize: 16,
  },
  brand: {
    fontFamily: Platform.OS === 'ios' ? 'Arial' : 'sans-serif',
    fontWeight: 'bold',
    fontSize: 26,
  },
};
