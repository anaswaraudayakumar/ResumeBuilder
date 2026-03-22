import React, { useEffect ,useState } from 'react'
import { FaFileDownload } from "react-icons/fa";
import { IoRefreshCircle } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import { FaFastBackward } from "react-icons/fa";
import Preview from '../components/Preview';
import Edit from '../components/Edit'
import { getResumeAPI } from '../services/allResumeApiservices';
function ViewResume() {

  const {id}=useParams()
  console.log(id);
  const [resumeData,setResumeData] =useState({})
  console.log(resumeData);
  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails =async()=>{
    if(id){
      const result = await getResumeAPI(id)
      console.log(result);
      setResumeData(result.data)
    }

  }
  
  return (  
    <div className='container'>
      <div className='row my-3'>
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <div className="d-flex justify-content-center align-items-center ">
            {/* download  */}
            <button classNam e='btn fs-2 me-2 '><FaFileDownload /></button>
            {/* edit  */}
            <Edit/>

             {/* history */}
            <Link to={'/downloads'} className='btn fs-2 text-danger me-2 '><IoRefreshCircle /></Link>

            {/* back  */}
            <Link to={'/form'} className='btn fs-2 text-success me-2 '><FaFastBackward /></Link>

          </div>
          <div className='p-5'><Preview resumeData={resumeData}/></div>
        </div>
        <div className='col-lg-2'></div>
      </div>
    </div>
  )
}

export default ViewResume