import React from 'react';
import './contact.css';
import gmail from '../../assets/gmail.png'

const Contact = () => {
    return (

        <div className='contact-container' id='contact'>

            <div className='contact-intro'>

                <h5>Contact Me</h5>
                <h3>Ways To Contact Me</h3>
                <p>Feel free to reach out and drop me a message in the binary world of zeros and ones. Let's connect through the language of computers</p>
            </div>

            <div className='contact-forms'>

                <form>

                    <div class="form-outline mb-4">
                        <input type="text" id="form4Example1" class="form-control" placeholder='Name' />

                    </div>


                    <div class="form-outline mb-4">
                        <input type="email" id="form4Example2" class="form-control" placeholder='Email' />

                    </div>


                    <div class="form-outline mb-4">
                        <textarea class="form-control" id="form4Example3" rows="4" placeholder='Message'></textarea>

                    </div>
                    

                    <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
                </form>



            </div>
        </div>




    )
}

export default Contact
