import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./StateProvider";
import reducer, {initialState} from "./reducer"

ReactDOM.render(
  <React.StrictMode>
   {/* initialState: what our data layer looks like initially and reducer: how we paly with the data */}
   <StateProvider initialState={initialState} reducer={reducer}>
   <App /> 
   </StateProvider>
  </React.StrictMode>,
  
  document.getElementById('root')
);

reportWebVitals();
