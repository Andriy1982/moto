import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ToastProvider} from 'react-toast-notifications';
//app
import {store} from '@app/store';
import {Router} from '@app/routes';
import {ThemeLayout} from '@app/layouts';

import '@app/i18n';
//local
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeLayout>
          <ToastProvider placement="top-center" autoDismiss autoDismissTimeout={3000}>
            <Router />
          </ToastProvider>
        </ThemeLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
