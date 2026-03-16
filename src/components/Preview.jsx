import React from 'react'
import { Divider, Button } from '@mui/material'

function Preview() {
  return (
    <div className='w-100'>
        <h2>Full Name</h2>
        <p className='fs-6'>Phone +1234567890</p>
        <p className='fs-6'>Email: <a href="">url</a></p>
        <p className='fs-6'>LinkdIn:<a href="">url</a></p>
        <p className='fs-6'>Github:<a href="">url</a></p>
        <p className='fs-6'>Location:</p>
        <Divider className='bg-dark'></Divider>
        <h4 className='mt-3'>Professional Summery</h4>
        <p>summery</p>
        <Divider className='bg-dark'></Divider>
        <h4 className='mt-3'>Technical Summery</h4>
        {/* dupicate according to user skills  */}
        <Button variant="text">Skill</Button>
        <Divider className='bg-dark'></Divider>
        <h4>Education</h4>
        <p className='fs-6'>Bachelor's Degree in  <b>degree</b></p>
        <p className='fs-6'>University/college</p>
        <p className='fs-6'>Year of Graduation </p>
        
    </div>
  )
}

export default Preview