import React from 'react'
import UserInput from '../components/UserInput'
import Preview from '../components/Preview'

function UserForms() {
  return (
    <div className='container m-5'>
        <div className='row'>
            <div className="col-lg-6">
                <UserInput/>
            </div>
            <div className="col-lg-6">
              <Preview/>
            </div>
        </div>
    </div>
  )
}

export default UserForms