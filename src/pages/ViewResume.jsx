import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { IoRefreshCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaFastBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit'
function ViewResume() {
  return (
    <div className='container'>
      <div className='row my-3'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center ">
            {/* download  */}
            <button className='btn fs-2 me-2 '><FaFileDownload /></button>
            {/* edit  */}
            <Edit/>

             {/* history */}
            <Link to={'/downloads'} className='btn fs-2 text-danger me-2 '><IoRefreshCircle /></Link>

            {/* back  */}
            <Link to={'/form'} className='btn fs-2 text-success me-2 '><FaFastBackward /></Link>

          </div>
          <div><Preview/></div>
        </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  )
}

export default ViewResume