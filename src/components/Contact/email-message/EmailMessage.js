import React from 'react';

import Backdrop from '../../Backdrop/Backdrop';

const EmailMessage = ({ hideMessage }) => {
   return (
      <Backdrop handleClick={hideMessage}>
         <div className="message">
            <p className="message__text">
               Thank you!
            </p>
            <p className="message__text">
               Your form submission has been received.
            </p>
            <button className="message__btn" onClick={hideMessage}>
               <span className="fas fa-long-arrow-alt-left"></span>
               <span className="message__btn-hide"> Go back to the site</span>
            </button>
         </div>
      </Backdrop>
   );
};

export default EmailMessage;

