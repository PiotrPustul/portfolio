import React from 'react';

import './contact-description.css';

const ContactDescription = () => {
   return (
      <div className="description">
         <h2 className="description__heading">
            Wanna know more?
         </h2>
         <p className="description__paragraph">
            If you like the projects I've made and think that I could bring
            the value for your company, or your project. Drop me a line and let's chat!</p>
         <div className="description__details">
            <span
               className="fab fa-whatsapp">
            </span>
            <span className="whatsapp-nr">
               +44 7542 384967</span>
         </div>
      </div>
   );
};

export default ContactDescription;
