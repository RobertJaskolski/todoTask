const cardsTheme = {
  uncompleted: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.7,
    padding: '10px 20px',
    backgroundColor: 'lightRed',
    borderRadius: '5px',
    boxShadow: '0 0 5px red',

    transition: 'opacity 0.3s 0.1s ease-in-out',
    '&:hover': {
      opacity: 0.9,
    },
  },
  completed: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.7,
    padding: '10px 20px',
    backgroundColor: 'softGreen',
    borderRadius: '5px',
    boxShadow: '0 0 5px green',

    transition: 'opacity 0.3s 0.1s ease-in-out',
    '&:hover': {
      opacity: 0.9,
    },
  },
};

export default cardsTheme;
