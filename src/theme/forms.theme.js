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
    fontSize: [3, 4, null, 5],
    maxHeight: '60vh',
  },
  select: {
    color: 'forms',
  },
  label: {
    color: 'forms',
    fontSize: [3, 3, null, 3],
  },
};

export default formsTheme;
