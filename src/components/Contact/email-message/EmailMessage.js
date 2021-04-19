import React from 'react';

import Backdrop from '../../Backdrop/Backdrop';

import './email-message.css';

const EmailMessage = ({ hideMessage }) => {
   return (
      <Backdrop handleClick={hideMessage}>
         <div className="message">
            <h2 className="message__heading">
               Thank you!
            </h2>
            <p className="message__text">
               Your message has been sent.
            </p>
            <button className="message__btn" onClick={hideMessage}>
               Close
            </button>
         </div>
      </Backdrop>
   );
};

export default EmailMessage;

