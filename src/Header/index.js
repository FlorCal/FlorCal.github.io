import React from 'react'

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className="menu">
          skills projects contact
        </div>
        <div className="portrait">
          pic of me
        </div>
        <div className="name">
          Flor Calderon
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
