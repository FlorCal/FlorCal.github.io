// libraries
import React from 'react'

//assets
import constants from '../app/constants'
import githubLogo from '../app/img/github-logo.svg'
import linkedinLogo from '../app/img/linkedin-logo.svg'



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
                <div className='linkedin'
                    onClick={this.onLinkedinClick.bind(this)}>
                    <img src={linkedinLogo} />
                    <a>My Linkedin</a>
                </div>
                <div className='github'
                    onClick={this.onGithubClick.bind(this)}>
                    <img src={githubLogo} />
                    <a>My GitHub</a>
                </div>
                <div className='copyright'>
                    <a>© 2018 Flor Calderon</a>
                </div>
            </div>
        )
    }
}

export default FooterComponent
