import React from 'react';
import theme from './theme/theme';
import { ThemeProvider } from 'theme-ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { RecoilRoot } from 'recoil';

// COMPONENTS AND CONTAINERS
import Home from './containers/Home';
import Header from './components/Header';
import TodoDetails from './containers/TodoDetails';
import SkeletonTaskDetails from './components/SkeletonTaskDetails';

// ErrorBoundary
import ErrorBoundaryForTodoDetails from './components/ErrorBoundaryForTodoDetails';

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
                  <ErrorBoundaryForTodoDetails>
                    <React.Suspense fallback={<SkeletonTaskDetails />}>
                      <TodoDetails />
                    </React.Suspense>
                  </ErrorBoundaryForTodoDetails>
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
