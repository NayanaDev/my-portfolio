import React from 'react'

function Header() {
  return (
    <header className='bg-white shadow-md py-4 px-6'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className="text-2xl font-bold text-blue-600">Nayana</h1>
            <nav>
                <ul className='flex space-x-4 mt-2'>
                    <li><a href="#about" className='text-blue-500 hover:text-blue-800 transition-colors duration-300'>About</a></li>
                    <li><a href="#about" className='text-blue-500 hover:text-blue-800 transition-colors duration-300'>Skills</a></li>
                    <li><a href="#projects" className='text-blue-500 hover:text-blue-800 transition-colors duration-300'>Projects</a></li>
                    <li><a href="#about" className='text-blue-500 hover:text-blue-800 transition-colors duration-300'>Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header