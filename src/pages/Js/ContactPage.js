import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const ContactPage = () => {
  const [emailIsSend, setEmailIsSend] = useState(false);
  const hideMessage = () => setEmailIsSend(prevValue => !prevValue)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_sxglci5',
      'template_zx8t12j',
      e.target,
      'user_lIzuF7kXx46jCZXC0UKw2'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
    setEmailIsSend({ emailIsSend: false })
  }

  const showMessage = (
    <div className="contact__show-message">
      <p className="contact__form-message">Thank you!</p>
      <p className="contact__form-message">Your form submission has been received.</p>
      <button className="contact__form-btn" onClick={hideMessage}>
        <span className="fas fa-long-arrow-alt-left"></span>
        <span className="contact__hide-message"> Go back to the site</span>
      </button>
    </div>
  )

  return (
    <div className="contact" name="contact">
      {emailIsSend ? showMessage : null}
      <div className="contact__description">
        <h2 className="contact__description-heading">Wanna know more?</h2>
        <p className="contact__description-paragraph">If you like the projects I've made and think that I could bring
          the value for your company, or your project. Drop me a line and let's chat!</p>
        <div className="contact-details">
          <span
            className="fab fa-whatsapp">
          </span>
          <span className="whatsapp-nr">
            +44 7542 384967</span>
        </div>
      </div>
      <div className="contact__form">

        <form onSubmit={sendEmail}>
          <label className="contact-label">Name</label>
          <input
            name="name"
            type="text"
          />

          <label className="contact-label">Email Address </label>
          <input
            name="email"
            type="email"
          />

          <label className="contact-label">Your Message</label>
          <textarea
            className="form__textarea"
            name="message" type="text"
          />

          <div className="contact__button-wrapper">
            <button className="submit-btn" type="submit" value="Send Message">Send</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactPage;