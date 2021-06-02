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
    fontSize: [3, 3, 4],
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '10px 0px',
  },
  input: {
    fontSize: [3, 3, 4],
    margin: '0px 0px 0px 15px',
  },
};

export default formsTheme;
