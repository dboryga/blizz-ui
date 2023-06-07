import { BlizzPaletteConfig, BlizzThemeConfig } from '../models';

export const BLIZZ_CRYSTAL_PALETTE: BlizzPaletteConfig = {
  white: '#ffffff',
  black: '#000000',
  neutral: {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  primary: {
    100: '#CBFCF4',
    200: '#99FAF2',
    300: '#64F2F0',
    400: '#3ED9E5',
    500: '#06B6D4',
    600: '#048EB6',
    700: '#036B98',
    800: '#014D7A',
    900: '#013765',
  },
  secondary: {
    100: '#D7ECFE',
    200: '#B0D7FE',
    300: '#89BDFC',
    400: '#6BA6F9',
    500: '#3B82F6',
    600: '#2B64D3',
    700: '#1D4AB1',
    800: '#12338E',
    900: '#0B2376',
  },
  success: {
    100: '#F0FCCE',
    200: '#DFF99E',
    300: '#C3EF6C',
    400: '#A6E046',
    500: '#7ECC12',
    600: '#64AF0D',
    700: '#4D9209',
    800: '#387605',
    900: '#2A6103',
  },
  info: {
    100: '#D7ECFE',
    200: '#B0D7FE',
    300: '#89BDFC',
    400: '#6BA6F9',
    500: '#3B82F6',
    600: '#2B64D3',
    700: '#1D4AB1',
    800: '#12338E',
    900: '#0B2376',
  },
  warning: {
    100: '#FFF6CC',
    200: '#FFEA99',
    300: '#FFDC66',
    400: '#FFCD3F',
    500: '#FFB600',
    600: '#DB9600',
    700: '#B77800',
    800: '#935C00',
    900: '#7A4800',
  },
  error: {
    100: '#FFE2D6',
    200: '#FFBEAE',
    300: '#FF9385',
    400: '#FF6B67',
    500: '#FF3542',
    600: '#DB2642',
    700: '#B71A40',
    800: '#93103C',
    900: '#7A0A39',
  },
} as const;

export const BLIZZ_CRYSTAL_THEME: BlizzThemeConfig = {
  ...BLIZZ_CRYSTAL_PALETTE,
  text: 'rgba(0, 0, 0, 0.78)',
  textOpposite: '#ffffff',
} as const;
