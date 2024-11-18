import React from 'react';
import logo from "./images/logo.jpg"
import { Link } from "react-router-dom";


function Nav() 
{
 
  return (
  <>
<nav class=' navv container-fluid bg-white d-flex  '>
  <div  className='col-2 mt-3'>
<img  class= "logo" src={logo} alt='' ></img>
  </div>
  <div  className='col-1 mt-3'>
  </div>
  

  

  <div className=' container col-9 d-flex my-3 '>
    <ul class=' list    text-center  d-flex gap-5 '>
      <li className="ash  list-unstyled   fs-5  text-center mt-3 " ><Link className='ash_link' to="/"><i class="fa-solid fa-house"></i></Link></li>
      <li className="ash list-unstyled fs-5  text-center mt-3"><Link className='ash_link' to="/about">About</Link></li>
      <li className="ash list-unstyled fs-5   text-center mt-3"><Link  className='ash_link' to="/hotels">Hotels & Resorts </Link></li>
      <li class="ash list-unstyled  fs-5  text-center mt-3"><Link  className='ash_link' to="/transport" >Transport</Link></li>
      <li class="ash list-unstyled  fs-5  text-center mt-3"><Link  className='ash_link' to="/tour_packages">Tour packages</Link></li>
      <li class="ash list-unstyled  fs-5  text-center mt-3"><Link  className='ash_link' to="/book_now">Book Now</Link></li>
      <li class="ash list-unstyled  fs-5  text-center mt-3"><Link className='ash_link' to="/contact">Contact us</Link></li>
    </ul>
  </div>
  
</nav>
  </>
  
  
  );
}

export default Nav;
