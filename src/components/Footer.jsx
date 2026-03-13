import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <div style={{height :"400px" , backgroundColor:"#181d19"}} className='d-flex  flex-column justify-content-center align-items-center text-light'>
      <h1 className='mb-3'>Contact Us</h1>
      <h5><MdAttachEmail /> resumebuilder@gmail.com</h5>
      <h5><FaPhone /> +91 9045636542</h5>
      <br />
      <h4>Connect With Us</h4>
      <div className="my-3 fs-5">
        <FaWhatsapp />
        <FaInstagram className='mx-3' />
        <FaFacebook />
      </div>
      <h5>designed & built using React </h5>
    </div>
  )
}

export default Footer