import React from 'react'

const Button = ({text, next}) => {
  return (
    <><button onClick={next}>{text}</button></>
  )
}

export default Button