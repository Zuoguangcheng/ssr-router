import React from 'react';
import { Link, NavLink } from 'react-router-dom'

import Home from './home/index.js';
import Footer from './footer/index.js'
import Side from './side/index.js';

require('./index.css');

export default class Main extends React.Component {

  render () {
    return (
      <div>
        <div className="font-size" onClick={() => alert(123)}>
          hello world
        </div>

        <div>
          <Link to="/home" target="_blank">home</Link>
        </div>
        
        <div>
          <Link to="/side" target="_blank">side</Link>
        </div>
        
        <div>
          <Link to="/footer" target="_blank">footer</Link>
        </div>
      </div>
    )
  }
}