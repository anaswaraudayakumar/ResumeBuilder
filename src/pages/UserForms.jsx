import React ,{useState} from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'

function UserForms() {
  const [resumeData,setResumeData] =useState({
          fullName:"",
          location:"",
          job:"",
          email:"",
          phone:"",
          linkedin:"",
          github:"",
          degree:"",
          uni:"",
          passOut:"",
          skills:[],
          summery:""
      })
  return (
    <div className='container m-5'>
        <div className='row'>
            <div className="col-lg-6">
                <UserInput resumeData={resumeData} setResumeData={setResumeData}/>
            </div>
            <div className="col-lg-6 mt-md-0 mt-5">
             {resumeData.fullName && <Preview resumeData={resumeData}/>}
            </div>
        </div>
    </div>
  )
}

export default UserForms