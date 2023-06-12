"use client"
import React, { FormEvent, useRef, useState } from 'react'

const BarberAcountForm = () => {
  const [formIsValid, setFormIsValid] = useState(false)
  const [inputTouched, setInputTouched] =useState(false)
  const fullnameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const yearsOfExpInputRef = useRef<HTMLInputElement>(null);
  const townInputRef = useRef<HTMLInputElement>(null);

  const formIsInvalid = !formIsValid && inputTouched 

  const formSubmissionHandler = (event: FormEvent) => {
    event.preventDefault()
    setInputTouched(true)
    const barberInfos = {
      fullname:fullnameInputRef.current?.value,
      email:emailInputRef.current?.value,
      username:usernameInputRef.current?.value,
      yearsOfExp:yearsOfExpInputRef.current?.value,
      town:townInputRef.current?.value,
    }
    
    if(barberInfos.fullname?.trim() == '' || undefined) {
      return formIsInvalid
    }
    if(barberInfos.email?.trim() == '' || undefined) {
      return formIsInvalid
    }
    if(barberInfos.username?.trim() == '' || undefined) {
      return formIsInvalid
    }
    if(barberInfos.yearsOfExp?.trim() == '' || undefined) {
      return formIsInvalid
    }
    if(barberInfos.town?.trim() == '' || undefined) {
      return formIsInvalid
    }
    setFormIsValid(true)
    console.log(barberInfos);
  }
  return (
    <div>
      { formIsInvalid && <p className='text-red-600'>please fill the form correctly</p>}
      <form onSubmit={formSubmissionHandler}>
        <div className='my-3'>
          <label htmlFor="full-name">Full name:</label>
          <input ref={fullnameInputRef} type="text" id='full-name' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="email">Email:</label>
          <input ref={emailInputRef} type="email" id='email' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="username">Username:</label>
          <input ref={usernameInputRef} type="text" id='username' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="years-of-exp">Years of experience:</label>
          <input ref={yearsOfExpInputRef} type="number" id='years-of-exp' className='border-2 border-black'/>
        </div>

        <div className='my-3'>
          <label htmlFor="town">Your town:</label>
          <input ref={townInputRef} type="text" id='town' className='border-2 border-black'/>
        </div>
        <div>
          <button type='submit' className='border-2 border-black bg-green-500'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BarberAcountForm
