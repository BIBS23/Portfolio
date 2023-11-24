import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qiwl3ls', 'template_3eygnxl', form.current, '9wNrPPUlzm4R-Mnc8')
          .then((result) => {

              console.log(result.text);
              e.target.reset();
              alert('Email Sent !')
             
          }, (error) => {
              console.log(error.text);
          });
      };

    return (

        <div className='contact-container' id='contact'>

            <div className='contact-intro'>

                <h5>Contact Me</h5>
                <h3>Ways To Contact Me</h3>
                <p>Feel free to reach out and drop me a message in the binary world of zeros and ones. Let's connect through the language of computers</p>
            </div>

            <div className='contact-forms'>

                <form ref={form} onSubmit={sendEmail} >

                    <div class="form-outline mb-4">
                        <input type="text" id="form4Example1" class="form-control" placeholder='Name' name='from_name' />

                    </div>


                    <div class="form-outline mb-4">
                        <input type="email" id="form4Example2" class="form-control" placeholder='Email' name='your_email' />

                    </div>


                    <div class="form-outline mb-4">
                        <textarea class="form-control" id="form4Example3" rows="4" placeholder='Message' name="message"></textarea>

                    </div>
                    

                    <button type="submit" value="Send" class="btn btn-primary btn-block mb-4">Send</button>
                </form>



            </div>
        </div>




    )
}

export default Contact
