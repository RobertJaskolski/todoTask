const formsTheme = {
  switch: {
    backgroundColor: 'highlight',
    'input:checked ~ &': {
      backgroundColor: 'primary',
    },
  },
  textarea: {
    color: 'forms',
    resize: 'none',
    width: '80%',
    margin: '20px auto',
    backgroundColor: 'muted',
    fontSize: 5,
    maxHeight: '60vh',
  },
  select: {
    color: 'forms',
  },
};

export default formsTheme;
