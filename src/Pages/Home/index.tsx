import React from 'react'
import Catalog from '../../Components/Catalog'
import Navbar from '../../Components/Navbar'
import './style.sass'
export default function Home() {
  return (
    <div className='HomePage'>
        <Navbar/>
        <Catalog/>
        Homepage
    
    </div>
  )
}
