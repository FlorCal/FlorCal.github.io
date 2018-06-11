import React from 'react'
import portrait from '../app/img/portrait.jpg'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='HeaderComponent'>
        <div className="menu">
          <a className='skills'>Skills</a>
          <a className='projects'>Projects</a>
          <a className='contact'>Contact</a>
        </div>
        <div className="portrait">
          <img src={portrait} />
        </div>
        <div className="name">
          <h1>Flor Calderon</h1>
          <h2>Developer, Designer & Customer Advocate</h2>
        </div>
        <div className="flower">
          tech flower
        </div>
        <div className="resume">
          download resume
        </div>
        <div className="info">
          location
          work auth
        </div>
        <div className="slant">
          slant
        </div>
      </div>
    );
  }
}

export default HeaderComponent
