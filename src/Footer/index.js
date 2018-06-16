import React from 'react';
import constants from '../app/constants'


class FooterComponent extends React.Component {

  onGithubClick() {
    var win = window.open(constants.urls.myGit, '_blank');
    win.focus();
  }

  onLinkedinClick() {
    var win = window.open(constants.urls.myLinkedin, '_blank');
    win.focus();
  }

  render() {
    return(
      <div className='FooterComponent'>
        <div className='github'
        onClick={this.onGithubClick.bind(this)}>
          <a>GitHub</a>
        </div>
        <div className='linkedin'
        onClick={this.onLinkedinClick.bind(this)}>
          <a>Linkedin</a>
        </div>
      </div>
    )
  }
}

export default FooterComponent
