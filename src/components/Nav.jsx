import React from 'react'

const Nav = () => {
  return (
    <nav className='text-white w-screen px-4'>
      <div className='flex justify-between'>
        <span>
          Rep Record
        </span>
        <button className='bg-orange-600 hover:bg-orange-700 transition-all px-4 py-1 rounded-md'>Login</button>
      </div>
    </nav>
  )
}

export default Nav