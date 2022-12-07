import React from 'react'
import {VscBellDot} from 'react-icons/vsc'
import {BiSearch} from 'react-icons/bi'
import {FaSortDown} from 'react-icons/fa'
import logo from '../../Images/logo.png'
import './style.sass'

export default function Navbar() {
  return (
    <header className='HeaderNavbar'>
        <div className='HeaderTitle'>
            <img src={logo} alt="logotipo"/>

        </div>
        <nav className='HeaderTabs'>
            <ul>
                <li>Home</li>
                <li>Animes</li>
                <li>Calendário</li>
            </ul>
        </nav>
        <div className='HeaderTools'>
            <div className='searchBar'>
                <input type="text" placeholder='Hoje vou assistir ...' />
                <span><BiSearch/></span>
            </div>
            <button className='notify-icon'><VscBellDot></VscBellDot></button>


            <div className='user-box'>
                <img src="https://i.pinimg.com/originals/48/51/d0/4851d00d687ab2582185de57908f8206.jpg" alt="icone-user" />
                <span><FaSortDown/></span>
            </div>
        </div>
    </header>
  )
}
