import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header/index.js'

class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='body'>
          <Header />
        </div>
          <div className='footer'>footer</div>
      </div>
    );
  }
}


ReactDOM.render(
  <Container />,
  document.getElementById('app')
);
