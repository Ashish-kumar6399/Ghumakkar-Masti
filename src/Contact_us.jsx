import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import sbi from "./images/sbi.jpg"

function Contact_us() {
  return (
    <>
    <Nav/>
    
    <div className="imaa">
<h1 className="text-center text-white">CONTACT US</h1>

</div>    

<div className='container dddd '>
    <div className='row mt-5'>
        <div className='col-4 mt-2 mb-5'>
        <div className='icons_contact'><i class="fa-solid fa-location-dot check_icon_conatct"></i></div>

    <h6>Address: A-88, A Block, Sector 4 Noida <br></br> Uttar Pradesh 201301
</h6>
        </div>
        <div className='col-4 mt-5 mb-5'>
        <div className='icons_contact_two'><i class="fa-solid fa-phone-volume icon_second"></i></div>
          <h6  class='number'>9911210174
           <br></br>
         9625781262</h6>
        </div>
       
        <div className='col-4'>
        <div className='icons_contact_three'><i class="fa-solid fa-envelope icon_third"></i></div>
        <h6 class="email">asadsdjjadh@gmil.com 
        <br></br>
        asadsdjjadh@gmil.com 
        <br></br>

        asadsdjjadh@gmil.com </h6>
        </div>
    </div>
</div>

<hr className='container'></hr>
<br></br>

<div>
 <h2 className='text-center'>ACCOUNT DETAILS</h2>
 <br></br>
 <h3 className='text-center' >MP TOUR AND TRAVELS.COM</h3>
 </div>

 <div className='container'>

    <div className='col-1'></div>
    <div className='col-5'></div>
    <div className='col-4 shadow sbi '>
    <img src={sbi} alt=''/>
      <hr></hr>
      <p className='ms-2'>A/C No-</p>
      <p className='ms-2'>BRANCH </p>
      <p className='ms-2'>IFSC CODE</p>
      <p className='ms-2'>PAN No</p>
    </div>
    <div className='col-1'></div>

   

 </div>

<Footer/>

    </>
  )
}

export default Contact_us
