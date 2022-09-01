import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <div className='relative z-20 top-0 bg-slate-800 h-20 w-full text-white'> 
               
                 <div className='flex flex-justify-center items-center'>
                    <div className=' py-12 flex flex-justify-center text-white'>
                    <Link to='contactForm'>ContactForm</Link>
                    </div>
                    <div  className='ml-7 flex flex-justify-center text-white'>
                    <Link to='contactList'>ContactList</Link>
                    </div>
                 </div>
                 </div>
        </div>
    )
}
