import React, { Component } from 'react';

import { StaticRouter } from 'react-router';
import App from './app.js';

class What extends Component {
  render() {
    return (
      <StaticRouter location={this.props.url}>
        <App />
      </StaticRouter>
    )
  }
}

export default What;