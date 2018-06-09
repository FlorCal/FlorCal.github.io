// libraries
import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'

// components
import Header from './Header'


class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='page'>
          <Header />
        </div>
        <div className='footer'>
          footer
        </div>
      </div>
    );
  }
}

// rendering container to #app
ReactDOM.render(
  <Container />,
  document.getElementById('app')
);
