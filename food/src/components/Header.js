import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
        <div className='banner'>
            <Navbar />
           <div className='banner_content'>
               
                  <div className='container'>
                      <div className='banner__text'>
                        {/* <img src="/icons/logo.svg" alt=""></img> */}
                      <h3>Fresh Meal</h3>
                     
                       <h1> Best Food Delivery</h1>
                       <p>With love and support from consumers, fresh meal expanded far and wide, first through the
                            entire city  in India.</p>

                        <div className='banner__btn'>
                          <a href='' className='btn btn-smart' > DEVLERY NOW</a>
                      </div>
                      </div>
                  </div>
               </div>
          

        </div>
    )
}

export default Header
