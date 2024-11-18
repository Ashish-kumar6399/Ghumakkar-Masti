import React from 'react'
import img2 from "./images/img2.jpg"
import img4 from "./images/img4.jpeg"
import img6 from "./images/img6.jpeg"
import img7 from "./images/img7.jpeg"
import img8 from "./images/img8.jpeg"
import img9 from "./images/img9.jpeg"

function Hotels() {
    const myy = {
        width: "500px",
      };
  return (
   <>

<div class="bg-dark">
<div className=' text-center  mt-5 mb-5 pt-5' >
      
       <h1  className='text-white'>HOTELS AND  RESORTS </h1>

       </div>

   
    <div className=' '>
    <div class ='hot  container'>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active">
  <div class= "cards-wrapper">
    <div class="card aaaa" style={myy}>
    <h3 className='text-center '>LOREM HOTEL</h3>
  <img   src={img4} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">KASHMIR</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
<h3 className='text-center '>LOREM HOTEL</h3>

  <img src={img6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">CHOPTA</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa " style={myy}>
<h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">GOA</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
</div>
</div>



    <div class="carousel-item">
<div class= "cards-wrapper">
<div class="card aaaa" style={myy}>
<h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rajasthan</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
<h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SHIMLA</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
<h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img6} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">HARIDWAR</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
    </div>
    </div>








    
    <div class="carousel-item">
<div class= "cards-wrapper">
    <div class="card aaa " style={myy}>
    <h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img7} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">RISHIKESh</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card" style={myy}>
<h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img8} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Golden Temple</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa " style={myy}>
<h3 className='text-center'>LOREM HOTEL</h3>

  <img src={img9} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">UJJAIN TEMPLE</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>

    </div>

    <div class="pb-3"><button class='btnn_two' type="button ">VIEW ALL</button>
</div>
    </div>

   </>
  )
}

export default Hotels
