import React from 'react';
import emailjs from 'emailjs-com';
import "./Contact.css"
import Navbar from '../Navbar/Navbar';
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_g14fi4p', 'template_kk1yhsb', e.target, 'user_H36Et2zzzH6G5fs7M47zG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
    <div>
        <Navbar></Navbar>
        <h2 className="text-center mt-2">Get In Touch</h2>
          <div className="form-container">
            <div className="p-5 w-50 ml-5  ">
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name='name'></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="email" name='email'></input>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Subject</label>
                    <input type="text" className="form-control" id="exampleFormControlInput3" placeholder="email" name='subject'></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message'></textarea>
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
      </div>
    </div>
    );
};

export default Contact;