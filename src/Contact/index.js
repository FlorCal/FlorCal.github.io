// libraries
import React from 'react'

// components
import Ribbon from '../app/Ribbon'

class ContactComponent extends React.Component {
    render() {
        return (
            <div className='ContactComponent'>
                <Ribbon title='Contact'/>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d806251.2309711041!2d-122.98094768383038!3d37.87388584462007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808583a3a688d7b5%3A0x8c891b8457461fa9!2sSan+Francisco+Bay+Area%2C+CA!5e0!3m2!1sen!2sus!4v1530218525806" allowFullScreen>
                    </iframe>
                </div>

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
