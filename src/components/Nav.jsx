import React from 'react'
import LoginButton from './LoginButton'

const Nav = () => {
  return (
    <nav className='text-white w-screen px-4'>
      <div className='flex justify-between'>
        <span className='text-orange-500 font-bold text-lg'>
          Rep Record
        </span>
          <LoginButton/>
      </div>
    </nav>
  )
}

export default Nav