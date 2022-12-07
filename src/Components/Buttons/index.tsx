import React from 'react'
import {FaPlayCircle} from 'react-icons/fa'
import './style.sass'
export function ButtonNormal({children}:any) {
  return (
    <button className='Button'>
        {children}
    </button>
  )
}
export function ButtonGradient({children}:any) {
    return(
        <button className='Button Gradient'>
            {children}
        </button>
    )
}
export function ButtonTrailer({children}:any) {

  return(
    <button className='Button Trailer'>
      <FaPlayCircle/>
      Assistir Trailer
    </button>
  )
}
