import './menu.css'
import { Link } from 'react-router-dom'
import Links from '../../pages/Links/Links'

import { BsYoutube, BsInstagram } from 'react-icons/bs'

export default function Menu () {
  return (
    <div className='menu'>

      <Link className='social' to="https://instagram.com/jeshuac" ></Link>
      <BsYoutube size={24} color='#FFF' />
      <Link className='social' to="https://instagram.com/jeshuac" ></Link>
      <BsInstagram size={24} color='#FFF'/>
      <Link className='menu-item' to='/links'> 
        Meus Links
      </Link>
    </div>
  )
}