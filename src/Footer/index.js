import React from 'react';
import constants from '../app/constants'


class FooterComponent extends React.Component {

  onGithubClick() {
    var win = window.open(constants.urls.myGit, '_blank');
    win.focus();
  }t

  render() {
    return(
      <div className='FooterComponent'>
        <div className='github'
        onClick={this.onGithubClick.bind(this)}>
          <a>GitHub</a>
        </div>
        <div className='linkedin'>
          <a>Linkedin</a>
        </div>
      </div>
    )
  }
}

export default FooterComponent
