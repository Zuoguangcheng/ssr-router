import Demo from './main'
import { hydrate } from 'react-dom'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from './app';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root')
)