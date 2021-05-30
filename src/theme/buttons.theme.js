const buttonsTheme = {
  primary: {
    color: 'background',
    bg: 'highlight',
    fontSize: [0, 2, 3],
    opacity: 0.7,
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
  icon: {
    width: '100%',
    height: '100%',
    color: 'text',
    cursor: 'pointer',
    borderColor: 'text',
    border: '1px solid',
    transition: 'all 0.2s ease-in-out',
    opacity: 0.7,
    '&:hover': {
      opacity: 1,
      color: 'secondary',
    },
    '&:disabled': {
      color: 'text',
      opacity: 0.7,
      cursor: 'default',
    },
  },
  close: {
    cursor: 'pointer',
    margin: '5px',
    border: '1px solid',
  },
};

export default buttonsTheme;
