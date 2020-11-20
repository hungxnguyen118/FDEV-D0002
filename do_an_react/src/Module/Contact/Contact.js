import React, { Component } from 'react';
import FormContact from './FormContact';

class Contact extends Component {
    render() {
        return (
            <div className="contact_form">
                                
                <div className="background_form_map container">

                    <div className="title_form">
                        Liên hệ
                    </div>

                    <div className="ban_do col-xs-12 col-md-6">
                        <FormContact />
                    </div>
                    
                    
                    <div className="ban_do col-xs-12 col-md-6">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4991292105274!2d106.6871391152604!3d10.773031562201123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ca6a7386b%3A0xd0e8c31c849624f!2zNjcgTmd1eeG7hW4gVGjhu4sgTWluaCBLaGFpLCBQaMaw4budbmcgUGjhuqFtIE5nxakgTMOjbywgUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1605876343274!5m2!1sen!2s" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>

                    <div className="clearfix"></div>

                </div>

            </div>
        );
    }
}

export default Contact;