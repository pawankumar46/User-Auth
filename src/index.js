import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store/configureStore';
 import { Provider } from 'react-redux/es/exports';
 const store = configureStore()

  console.log('state' , store.getState())
   
   store.subscribe(()=>{
    console.log('updated' , store.getState())
   })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    
  </BrowserRouter>
   
  
);

