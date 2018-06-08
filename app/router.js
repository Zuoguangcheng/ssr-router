
import React, { Component } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import AppMain from './main'

import Home from './home/index';
import Side from './side/index';
import Footer from './footer/index';

class AppRouter extends Component {

  render () {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/side" component={Side} />
        <Route path="/footer" component={Footer} />
        <Route path="/" component={AppMain} />
      </Switch>
    )
  }
}

export default AppRouter
