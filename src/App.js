import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme/theme';
import Home from './containers/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <div className='App'>
            <Header />
            <Switch>
              <Route path='/todo/:id'>
                <h1>Jakieś todo</h1>
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
