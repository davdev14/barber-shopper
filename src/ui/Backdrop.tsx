import React, { ReactNode } from 'react'

type componentProps = {
  children: ReactNode,
}

const backdrop = ({children}: componentProps) => {
  return (
    <div className='fixed top-11 left-0 w-full h-screen z-20 bg-gray-800'>
      {children}
    </div>
  )
}

export default backdrop
