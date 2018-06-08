import React from 'react';
import { Link } from 'react-router-dom'
require('./index.css');

export default class Home extends React.Component {
  /* componentDidMount() {
    alert(1)
  } */
  render () {
    return (
      <div>
        <div className="home" onClick={() => alert('home')}>我是home</div>
        <div>
          <Link to="/">回首页</Link>
        </div>
      </div>
    )
  }
}