const card = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  opacity: 0.7,
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'opacity 0.3s 0.1s ease-in-out',
  '&:hover': {
    opacity: 0.9,
  },
};

const cardsTheme = {
  uncompleted: {
    backgroundColor: 'lightRed',
    boxShadow: '0 0 5px red',
    ...card,
  },
  completed: {
    backgroundColor: 'softGreen',
    boxShadow: '0 0 5px green',
    ...card,
  },
};

export default cardsTheme;
