import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';


function ResumeSteps() {
  return (
    <div className='my-5'>
      <h1 className="text-center">Create a Job-winning Resume in Minute</h1>
      <div className='container my-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
          <IoDocumentText className='fs-1 text-primary mb-3' />
          <h2>Add your Details</h2>
          <p>Add pre-written examples of each section</p>
          <h2>Step 1</h2>
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-4 rounded p-5 shadow text-center">
          <FaFileDownload className='fs-1 text-danger mb-3' />
          <h2>Download Your Resume</h2>
          <p>Download and start Applying</p>
          <h2>Step 2</h2>
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="text-center mt-5">
          <Link to={'/forms'} className='btn text-light' style={{ backgroundColor: 'rgba(24,29,25)' }} >Let's Start</Link>
        </div>
      </div>
    </div>
  )
}

export default ResumeSteps