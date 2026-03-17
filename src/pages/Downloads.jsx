import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Downloads() {
  return (
    <div className='container'>
      <div className='d-flex m-5 justify-content-between align-items-center'>
        <h1>Downloaded Resume History  </h1>
        <Link to={'/forms'} > <IoMdArrowRoundBack /> Back</Link>
      </div>
      <div className='row mb-5'>
        <div className="col-lg-4">
          <div style={{height:'400px'}} className=" shadow p-3 rounded">
            <div className="d-flex justify-content-between">
              <h5>Review at: time</h5>
              <button className='btn fs-5 text-danger'><MdDelete/></button>
            </div>
            <div className='mt-3 text-center'>
              <img height={'300px'} width={'200px'} src="https://www.my-resume-templates.com/wp-content/uploads/2024/01/best-cv-format-245.jpg" alt="cv" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Downloads