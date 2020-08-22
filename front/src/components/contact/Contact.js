import React from "react";
import Button from '@material-ui/core/Button';
import "./Contact.scss"

export default () => {
    return (
        <div id="contact" className="container">
            <h2>Contact us</h2>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <form action="https://formspree.io/batigonza@gmail.com" method="POST">
                    <div className="form-group">
                        <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Your email"
                        required
                        /> 
                      </div>
                      <div className="form-group">
                        <input 
                        type="subject" 
                        className="form-control" 
                        id="subject" 
                        placeholder="Subject"
                        required
                        /> 
                      </div>
                      <div className="form-group">
                        <textarea 
                        className="form-control" 
                        id="message" 
                        rows="4"
                        placeholder="Your message"
                        ></textarea>
                    </div>
                    <Button variant="contained" type="submit">Send</Button>
                    </form>
                </div>
            </div>
        </div>
    );
  };