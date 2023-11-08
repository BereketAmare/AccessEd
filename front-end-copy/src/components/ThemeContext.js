import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';


const lightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light'

    // Define primary and secondary colors
    primary: {
      main: '#070708', // Main color for primary elements
    },
    secondary: {
      main: '#FF4081', // Main color for secondary elements
    },

    // You can also define other colors like error and warning
    error: {
      main: '#FF5722', // Main color for error elements
    },
    warning: {
      main: '#FFC107', // Main color for warning elements
    },

    // Text and background colors
    text: {
      primary: '#333', // Primary text color
      secondary: '#666', // Secondary text color
    },
    background: {
      default: '#FFF', // Default background color
    },

    // Additional custom colors
    customColor: {
      main: '#00BCD4', // A custom color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'

    // Define primary and secondary colors
    primary: {
      main: '#2196F3', // Main color for primary elements
    },
    secondary: {
      main: '#FF4081', // Main color for secondary elements
    },

    // You can also define other colors like error and warning
    error: {
      main: '#FF5722', // Main color for error elements
    },
    warning: {
      main: '#FFC107', // Main color for warning elements
    },

    // Text and background colors
    text: {
      primary: '#FFF', // Primary text color
      secondary: '#B0BEC5', // Secondary text color
    },
    background: {
      default: '#121212', // Default background color
    },

    // Additional custom colors
    customColor: {
      main: '#00BCD4', // A custom color
    },
  },
});

const ThemeContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme; // Define your dark and light themes

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}





    

export { lightTheme, darkTheme };