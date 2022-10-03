import React from 'react'

type ButtonChildren = {
    children: string,
    onClick?: () => void
}



function Button({children, onClick}: ButtonChildren) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}

export default Button