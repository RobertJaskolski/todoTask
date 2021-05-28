import formsTheme from './forms.theme';
import buttonsTheme from './buttons.theme';
import textTheme from './text.theme';
import cardsTheme from './cards.theme';

const theme = {
  colors: {
    text: '#454f5b',
    forms: '#454f5b',
    background: '#fff',
    primary: '#5c6ac4',
    secondary: '#006fbb',
    highlight: '#47c1bf',
    muted: '#e6e6e6',
    lightRed: '#e96363',
    softGreen: '#8cec79',
    modes: {
      dark: {
        forms: '#f2f2f2',
        background: '#383838',
        primary: '#3cf',
        secondary: '#e0f',
        muted: '#191919',
      },
    },
  },
  fonts: {
    body: '"Nunito Sans", sans-serif',
  },
  fontSizes: [12, 14, 16, 18, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    text: 600,
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
    a: {
      textDecoration: 'none',
      fontSize: 3,
      fontWeight: 'bold',
      minHeight: '60px',
      color: 'text',
    },
  },
  forms: formsTheme,
  buttons: buttonsTheme,
  text: textTheme,
  cards: cardsTheme,
};

export default theme;
