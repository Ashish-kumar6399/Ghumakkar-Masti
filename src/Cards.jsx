import React from 'react'
import img2 from "./images/img2.jpg"
import copta from "./images/copta.jpeg"
import goa from "./images/goa.jpeg"
import img5 from "./images/img5.jpeg"
import chopta from "./images/chopta.png"
import kasol from "./images/kasol.png"
import kashmir from "./images/kashmir.png"




function Cards(){
    const myy = {
        width: "500px",
      };
  return (
    <>

<div  className='text-center  cards '> 
<h1>
TOUR PACKAGES</h1></div>

   
    
    <div className=' cardd container'>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
  <div class="carousel-item active">
  <div class= "cards-wrapper">
    <div class="card aaaa " style={myy}>
  <img   src={chopta} class="p-2 card-img-top" alt="..."/>
  <div class="card-body ">
    <h5 class="card-title ">KASHMIR</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
  <img src={kashmir} class="card-img-top" alt="..."/>
  <div class="card-body  ">
    <h5 class="card-title">CHOPTA</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
  <img src={kasol} class="card-img-top" alt="..."/>
  <div class="card-body  aaaa">
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
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Rajasthan</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">SHIMLA</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
  <img src={img2} class="card-img-top" alt="..."/>
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
    <div class="card aaaa" style={myy}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">RISHIKESh</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Golden Temple</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h3>10 Night-11 Days</h3>
  </div>
</div>
<div class="card aaaa" style={myy}>
  <img src={img2} class="card-img-top" alt="..."/>
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

<div>
<button class='btnn' type="button ">VIEW ALL</button>

</div>
    </div>

    </>
  )
}

export default Cards
