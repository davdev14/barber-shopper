"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../../assets/icons/Barber-Shopper.svg'
import menuIcon from '../../assets/icons/menu_FILL0_wght400_GRAD0_opsz48.svg'
import Backdrop from '@/ui/Backdrop'

const Navbar = () => {
  const links = [
    {name: "Explore", link:"/explore"},
    {name: "Create Barber Profile", link:"/create-barber-profile"},
    {name: "Sign in", link:"/"},
  ]

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='md:flex md:items-center md:justify-between md:px-12 md:py-4 w-full fixed top-0 left-0 flex items-center justify-between px-2 py-3 bg-white z-50'>
      <Image
        src={menuIcon}
        alt="barber shopper logo"
        width={35}
        className='cursor-pointer md:hidden'
        onClick={() => setIsOpen(prev => !prev)}
      />
      <Image
        src={logo}
        alt="barber shopper logo"
        width={50}
      />
      <div className='md:flex md:items-center'>
      <ul className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-[-1] left-0 w-3/5 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'left-0 opacity-100 pt-16' : 'left-[-490px]'} md:opacity-100 opacity-0`}>
      {
        links.map((link) => (
          <li key={link.name} className='cursor-pointer md:ml-8 text-xl md:my-0 my-7'>
            <a href={link.link}>{link.name}</a>
          </li>
        ))
      }
      </ul>
      <a 
        className='border-2 border-black px-4 py-2 text-xl md:ml-8 hover:bg-green-700'
        href='/'
      >
        Sign up
      </a>
      </div>
    </div>
  )
}


export default Navbar

