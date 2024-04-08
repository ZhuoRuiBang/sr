import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import router from './routes';
import NavBar from '@/component/NavBar'
import { RouterProvider } from 'react-router-dom'
import store from './store';
import { register } from "swiper/element/bundle";
import { Provider } from 'react-redux';
register();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <NavBar />
      <RouterProvider router={router} />
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

