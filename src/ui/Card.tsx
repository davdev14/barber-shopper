import React, { ReactNode } from 'react'

type componentProps = {
  children: ReactNode,
}

const card = ({children}: componentProps) => {
  return (
    <div className='bg-slate-900'>
      {children}
    </div>
  )
}

export default card
