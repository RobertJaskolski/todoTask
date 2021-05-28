import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme/theme';
import Home from './containers/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
