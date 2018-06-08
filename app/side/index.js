import React from 'react';
import { Link } from 'react-router-dom'
require('./index.css');

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <div className="side" onClick={() => alert('side')}>我是side</div>
        <div>
          <Link to="/">回首页</Link>
        </div>
      </div>
    )
  }
}