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

                <form className='form' action="https://formspree.io/calderonflor82@gmail.com"
                    method="POST">
                    <span>Write me a note and how to contact you back</span>

                    <div className='label'>
                        <div className='email'>
                            <label>Your e-mail:</label>
                        </div>
                        <div className='message'>
                            <label>Message:</label>
                        </div>
                    </div>

                    <div>
                        <input type="email" name="_replyto"/>
                        <input type="text" name="messagebox"/>
                        <input type="submit" value="Send Message"/>
                    </div>



                </form>

            </div>
        )
    }
}

export default ContactComponent
