import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import './navigation.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

