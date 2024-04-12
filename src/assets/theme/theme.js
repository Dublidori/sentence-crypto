// theme.js

import { createTheme } from '@mui/material/styles';

// A custom theme for your app
const theme = createTheme({
  palette: {
    mode: 'dark', // or 'light' if you prefer
    primary: {
      main: '#0f0', // Primary color for your app
    },
    secondary: {
      main: '#ff8c00', // Secondary color for your app
    },
    background: {
      default: '#121212', // Background color for the app
      paper: '#222', // Background color for elements like Cards and Paper
    },
    text: {
      primary: '#ffffff', // Primary text color
      secondary: '#e0e0e0', // Secondary text color
    },
    error: {
      main: '#f44336', // Color for error states
    },
    warning: {
      main: '#ff9800', // Color for warning states
    },
    info: {
      main: '#2196f3', // Color for informational messages and states
    },
    success: {
      main: '#0f0', // Color for success states
    },
  },
  typography: {
    fontFamily: '"Courier New", monospace',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700, // Bold for h1
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500, // Medium for h2
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400, // Normal weight for body text
    },
    button: {
      textTransform: 'none', // If you prefer buttons without uppercase
      fontWeight: 600, // Slightly bold for buttons
    },
    // Add more variants as needed
  },
  components: {
    // Name of the component ⚛️
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
        },
      },
    },
    // You can add more component style overrides here
  },
});

export default theme;
