import React, {ReactNode} from 'react';
import {ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {
  ThemeProvider as ReStyleThemeProvider,
  createText,
  createBox,
  useTheme as useReTheme,
} from '@shopify/restyle';

const theme = {
  colors: {
    primary: '#22273B',
    primaryBackground: '#E7F9F7',
    secondary: '#2CB9B0',
    danger: '#FF0058',
    info: '#808080',
    text: 'rgba(12, 13, 52, 0.7)',
    background: '#F6F6F6',
    chartBackground: '#2CB9B0',
    outflow: '#FFC641',
    inflow: '#93FCF8',
    earn: '#46923c',
    lightBlue: '#BFEAF5',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: 'background',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,

      color: 'secondary',
    },
    title3: {
      fontSize: 16,
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 15,
      color: 'text',
      textAlign: 'center',
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      color: 'secondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const ThemeProvider = ({children}: {children: ReactNode}) => (
  <ReStyleThemeProvider {...{theme}}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
