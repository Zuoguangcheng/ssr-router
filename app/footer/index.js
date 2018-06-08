import React from 'react';
import { Link } from 'react-router-dom'
require('./index.css');

export default class Home extends React.Component {
  componentDidMount() {
    alert(1)
  }
  render () {
    return (
      <div>
        <div className="footer" onClick={() => alert('footer')}>我是footer</div>
        <div>
          <Link to="/">回首页</Link>
        </div>
      </div>
    )
  }
}
