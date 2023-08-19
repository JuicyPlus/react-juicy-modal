export type ThemeName = keyof typeof themes

export interface Theme {
  primary: string
  secondary: string
  grey: string
  light: string
  dark: string
  white: string
}

// ThemesType is type which has string key and value is type 'Theme'
type ThemesType = Record<string, Theme>

const themes: ThemesType = {
  orange: {
    primary: '#F0B153',
    secondary: '#5CAD6E',
    grey: '#475467',
    light: '#F5F5F5',
    dark: '#9E692A',
    white: '#FFFFFF'
  },
  kiwi: {
    primary: '#219E0D',
    secondary: '#776F51',
    grey: '#475467',
    light: '#F9FFF2',
    dark: '#195F0E',
    white: '#FFFFFF'
  },
  grape: {
    primary: '#5936BD',
    secondary: '#FF4BC2',
    grey: '#475467',
    light: '#F2F8EB',
    dark: '#493F65',
    white: '#FFFFFF'
  }
}

export default themes
