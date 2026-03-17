import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img src="https://404-pagenotfound.firebaseapp.com/img/logo.png" alt="pgntfnd" />
      <h1 className='my-3 '>WE ARE SORRY, LOOK LIKE YOUR LOST</h1>
      <Link to={'/'} className="btn btn-dark">Back to Home</Link>
    </div>
  )
}

export default PageNotFound
