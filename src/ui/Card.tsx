import React, { ReactNode } from 'react'
import classes from './Card.module.css'


type componentProps = {
  children: ReactNode,
}

const card = ({children}: componentProps) => {
  return (
    <div className={classes.card}>
      {children}
    </div>
  )
}

export default card
