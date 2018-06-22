// libraries
import React from 'react'
import ReactDOM from 'react-dom'

import './index.scss'

// components
import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'
import Scroll from './app/Scroll'
import Footer from './Footer'


class Container extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='page'>
                    <Header />
                    <Skills />
                    <Projects />
                    <Scroll />
                </div>
                <div className='footer'>
                    <Footer />
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
