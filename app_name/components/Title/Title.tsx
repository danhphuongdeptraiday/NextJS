import React from 'react'

type TitleProps = {
    children: string;
}

function Title({children}: TitleProps) {
  return (
    <h2>{children}</h2>
  )
}

export default Title