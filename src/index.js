import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import router from './routes';
import NavBar from '@/component/NavBar'
import Mask from '@/component/Mask'
import { RouterProvider } from 'react-router-dom'
import { register } from "swiper/element/bundle";
register();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <NavBar />
    <RouterProvider router={router} />
    <Mask />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

