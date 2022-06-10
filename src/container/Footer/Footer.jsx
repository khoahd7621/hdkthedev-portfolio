import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client';

import './Footer.scss';

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInpupt = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name] : value });
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
  }

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hoangdangkhoa7621@gmail.com" className="p-text">
            hoangdangkhoa7621@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +84 792596763" className="p-text">
            +84 792596763
          </a>
        </div>
      </div>

      {
        !isFormSubmitted ?
          (<div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" name="name"
                    placeholder="Your Name" value={name} 
                    onChange={handleChangeInpupt} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" name="email"
                    placeholder="Your Email" value={email} 
                    onChange={handleChangeInpupt} />
            </div>
            <div>
              <textarea className="p-text" placeholder="Your message"
                value={message} name="message"
                onChange={handleChangeInpupt}></textarea>
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
          </div>)
          : 
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg');