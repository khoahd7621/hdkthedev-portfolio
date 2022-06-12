import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <a href="https://twitter.com/khoahd7621" target="_blank" rel="noreferrer">
            <BsTwitter />
        </a>
        <a href="https://www.facebook.com/khoahd7621/" target="_blank" rel="noreferrer">
            <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/khoahd7621/" target="_blank" rel="noreferrer">
            <BsInstagram />
        </a>
    </div>
  )
}

export default SocialMedia