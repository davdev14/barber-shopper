import React from 'react'

const BarberAcountForm = () => {
  return (
    <div>
      <form action="">
        <div className='my-3'>
          <label htmlFor="full-name">Full name:</label>
          <input type="text" id='full-name' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="email">Email:</label>
          <input type="email" id='email' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="username">Username:</label>
          <input type="text" id='username' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="years-of-exp">Years of experience:</label>
          <input type="number" id='years-of-exp' className='border-2 border-black'/>
        </div>
        
        <div className='my-3'>
          <label htmlFor="town">Your town:</label>
          <input type="text" id='town' className='border-2 border-black'/>
        </div>
      </form>
    </div>
  )
}

export default BarberAcountForm
