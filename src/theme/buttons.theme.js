const button = {
  color: 'background',
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'opacity 0.2s ease-in-out',
  textTransform: 'uppercase',
  '&:hover': {
    opacity: 1,
  },
};

const buttonsTheme = {
  primary: {
    ...button,
    bg: 'highlight',
    fontSize: [0, 2, 3],
  },
  secondary: {
    ...button,
    bg: 'secondary',
  },
  deleted: {
    ...button,
    bg: '#ff9999',
  },
  icon: {
    ...button,
    width: '100%',
    height: '100%',
    color: 'text',
    borderColor: 'text',
    border: '1px solid',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      opacity: 1,
      color: 'secondary',
    },
    '&:disabled': {
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
