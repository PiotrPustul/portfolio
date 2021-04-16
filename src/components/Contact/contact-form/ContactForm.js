import React from 'react';

import Button from '../../Button/Button';

const ContactForm = (props) => {
   return (
      <div className="form">
         <form onSubmit={props.submit}>
            <label className="form__label ">Name</label>
            <input className="form__input" name="name" type="text" />

            <label className="form__label">Email Address </label>
            <input className="form__input" name="email" type="email" />

            <label className="form__label">Your Message</label>
            <textarea
               className="form__textarea"
               name="message"
               type="text"
            />

            <div className="contact__btn-wrapper">
               <button
                  className="contact__btn"
                  type="submit"
                  value="Send Message">
                  Send
               </button>
            </div>
         </form>
      </div>
   );
}

export default ContactForm;