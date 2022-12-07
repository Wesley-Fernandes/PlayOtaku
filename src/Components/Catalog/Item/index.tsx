import React from 'react'
import './style.sass'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
export default function Item() {
  return (
    <div className='Item'>
        <img src="https://i.pinimg.com/564x/85/bd/41/85bd41f84fbbe9c98d46ba004d533497.jpg" alt="Kimetsu No Yaiba card" />
        <div className='ItemInfo'>
          <h3>Kimetsu No Yaiba</h3>
          <span className='year'>2019</span>
          <div className='stars'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>

            <span> 4.0</span>
          </div>
        </div>
    </div>


  )
}
