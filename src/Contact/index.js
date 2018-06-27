// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'

class ContactComponent extends React.Component {
    render() {
        return (
            <div className='ContactComponent'>
                <Ribbon title='Contact'/>
                <div className='map'>Google Map</div>

                <div className='form'>
                </div>
            </div>
        )
    }
}

export default ContactComponent
