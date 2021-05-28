const buttonsTheme = {
  primary: {
    color: 'background',
    bg: 'highlight',
    opacity: 0.8,
    transition: 'opacity 0.2s ease-in-out',
    textTransform: 'uppercase',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
    },
  },
  secondary: {
    color: 'background',
    bg: 'secondary',
    opacity: 0.7,
    transition: 'opacity 0.2s ease-in-out',
    textTransform: 'uppercase',
    '&:hover': {
      opacity: 1,
      cursor: 'pointer',
    },
  },
};

export default buttonsTheme;
