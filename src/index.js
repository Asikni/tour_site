import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

//get a refrence to the particular div we want our output to be:
const el = document.getElementById('root');

// tell react to take control of that element
const root = ReactDOM.createRoot(el);



//show component on the screen
root.render(<App />);