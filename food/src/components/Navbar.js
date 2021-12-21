import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'> 
          <div className='navbar__text'>
            <div className='logo'><img src="/icons/logo-2.svg" alt=""></img></div> 
            <ul className='navbar__ul'>
               <li><a href=''>Home</a></li>
               <li><a href=''>Menu</a></li>
               <li><a href=''>About</a></li>
               <li><a href=''>Blog</a></li>
               <li><a href=''>Contact</a></li>
                

         </ul> 
        </div>  
        </nav>
    )
}

export default Navbar
