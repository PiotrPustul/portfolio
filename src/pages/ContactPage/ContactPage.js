import emailjs from 'emailjs-com';
import React, { useState } from 'react';

import ContactForm from '../../components/Contact/contact-form/ContactForm';
import ContactDescription from '../../components/Contact/contact-description/ContactDescription';
import EmailMessage from '../../components/Contact/email-message/EmailMessage';

import './contact-page.css';

const ContactPage = () => {
  const [emailIsSend, setEmailIsSend] = useState(false);
  const hideMessage = () => setEmailIsSend(false);

  const sendEmail = (e) => {
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
    setEmailIsSend(true);
  };

  return (
    <div className="contact" name="contact">
      <ContactDescription />
      <ContactForm submit={sendEmail} />
      {emailIsSend && <EmailMessage hideMessage={hideMessage} />}
    </div>
  );
};

export default ContactPage;