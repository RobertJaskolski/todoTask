import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme/theme';
import Home from './containers/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ToastProvider } from 'react-toast-notifications';
import TaskDetails from './containers/TaskDetails';
import SkeletonTaskDetails from './components/SkeletonTaskDetails';
function App() {
  return (
    <RecoilRoot>
      <Router>
        <ToastProvider placement='bottom-center'>
          <ThemeProvider theme={theme}>
            <div className='App'>
              <Header />
              <Switch>
                <Route path='/todo/:id'>
                  <React.Suspense fallback={<SkeletonTaskDetails />}>
                    <TaskDetails />
                  </React.Suspense>
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </div>
          </ThemeProvider>
        </ToastProvider>
      </Router>
    </RecoilRoot>
  );
}

export default App;
