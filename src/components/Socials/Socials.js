import React from 'react'

import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/cib/github';
import linkedinIcon from '@iconify-icons/cib/linkedin';

const Socials = () => {
  return (
    <div className="socials">
      <div className="socials__wrapper">
        <ul className="socials__links">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/pepe199111">
            <Icon
              className="iconyfy github"
              icon={githubIcon} width="35"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/piotr-pustul/?locale=en_US">
            <Icon
              className="iconyfy linkedin"
              icon={linkedinIcon} width="35"
            />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Socials;