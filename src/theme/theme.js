import formsTheme from './forms.theme';
import buttonsTheme from './buttons.theme';
import textTheme from './text.theme';

const theme = {
  colors: {
    text: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    gray: '#dfe3e8',
    accent: '#f49342',
    darken: '#00044c',
    modes: {
      dark: {
        text: '#fff',
        background: '#383838',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
        gray: '#999',
        purple: '#c0f',
      },
    },
  },
  fonts: {
    body: '"Nunito Sans", sans-serif',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  letterSpacings: {
    body: 'normal',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.15,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
    },
  },
  forms: formsTheme,
  buttons: buttonsTheme,
  text: textTheme,
};

export default theme;
