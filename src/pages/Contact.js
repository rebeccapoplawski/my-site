import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Rebecca Poplawski via email @ r.m.poplawski@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      {/* <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <EmailLink />
      </div> */}
      <div>
        <h3>Email</h3>
        <p>r.m.poplawski@gmail.com</p>
      </div>
      <div>
        <h3>Social</h3>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
