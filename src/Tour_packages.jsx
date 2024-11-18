import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import pkg1 from "./images/pkg1.jpg"
import "./Tour.css"
// import "./About.css"



function Tour_packages() {
  return (
    <div>
    <Nav/>
    <div className="imaa">
<h1 className="text-center text-white">OUR PACKAGES</h1>
</div>  
<br></br>  
<br></br>  
<div className='container'>
<div className='row'>
    <div className='col-3'>
        <div>
            <img src={pkg1}/>
            <h4> GOLDEN TRAINGLE WITH <span className='text-center'>GOA</span> </h4>
          <diV  className="d-flex text-center bbbb" >  <span>Duration</span><h5>:10N/11D</h5></diV>
        </div>
    </div>
    <div className='col-3'></div>
    <div className='col-3'></div>
    <div className='col-3'></div>
</div>
</div>

    <Footer/>
    </div>
  )
}

export default Tour_packages
