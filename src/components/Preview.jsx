import React from 'react'
import { Divider, Button } from '@mui/material'

function Preview({resumeData}) {
  return (
    <div className='w-100'>
        <h2>{resumeData?.fullName}</h2>
        <p className='fs-6'>Phone:{resumeData?.phone}</p>
        <p className='fs-6'>Email: <a href={resumeData?.email}>{resumeData?.email}</a></p>
        <p className='fs-6'>LinkdIn:<a href={resumeData?.linkedin}>{resumeData?.linkedin}</a></p>
        <p className='fs-6'>Github:<a href={resumeData?.github}>{resumeData?.github}</a></p>
        <p className='fs-6'>Location:{resumeData?.location}</p>
        <Divider className='bg-dark'></Divider>
        <h4 className='mt-3'>Professional Summery</h4>
        <p>{resumeData?.summery}</p>
        <Divider className='bg-dark'></Divider>
        <h4 className='mt-3'>Technical Skills</h4>
        {
          
          resumeData?.skills?.map((item,index)=>{
                <><Button key={index} className='text-dark' variant="text">{item}</Button>{index< 
                  resumeData?.skills.length  && ','}</>
          })
        }
        {/* dupicate according to user skills  */}
        
        <Divider className='bg-dark'></Divider>
        <h4>Education</h4>
        <p className='fs-6'>Bachelor's Degree in <b>{resumeData?.degree}</b></p>
        <p className='fs-6'>University/college Name : {resumeData?.uni}</p>
        <p className='fs-6'>Year of Graduation : {resumeData?.passOut}</p>
        
    </div>
  )
}

export default Preview