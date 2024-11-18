import React from 'react'

function Footer() {
  return (
   <>
{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
<div class="container-fluid my-4 bg-dark mb-1">
  {/* <!-- Footer --> */}
  <footer
          class="text-center text-lg-start text-white"
          >
    {/* <!-- Grid container --> */}
    <div class="container p-4 pb-0">
      {/* <!-- Section: Links --> */}
      <section class="">
        {/* <!--Grid row--> */}
        <div class="row">
          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr class="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">QUICK LINKS</h6>
            <p>
              <a class=" products text-white ">ABOUT</a>
            </p>
            <p>
              <a class=" products text-white">SERVICES</a>
            </p>
            <p>
              <a class=" products text-white">BOOK NOW</a>
            </p>
            <p>
              <a class=" products text-white"> Hotels & Resorts</a>
            </p>
          </div>
          {/* <!-- Grid column --> */}

          <hr class="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <hr class="w-100 clearfix d-md-none" />

          {/* <!-- Grid column --> */}
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          {/* <!-- Grid column --> */}

          {/* <!-- Grid column --> */}
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>

            {/* <!-- Facebook --> */}
            <a
               class="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i class="fab fa-facebook-f"></i
              ></a>

            {/* <!-- Twitter --> */}
            <a
               class="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i class="fab fa-twitter"></i
              ></a>

            {/* <!-- Google --> */}
            <a
               class="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i class="fab fa-google"></i
              ></a>

            {/* <!-- Instagram --> */}
            <a
               class="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i class="fab fa-instagram"></i
              ></a>

            {/* <!-- Linkedin --> */}
            <a
               class="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i class="fab fa-linkedin-in"></i
              ></a>
            {/* <!-- Github --> */}
            <a
               class="btn btn-primary btn-floating m-1"
               href="#!"
               role="button"
               ><i class="fab fa-github"></i
              ></a>
          </div>
        </div>
        {/* <!--Grid row--> */}
      </section>
      {/* <!-- Section: Links --> */}
    </div>
    {/* <!-- Grid container --> */}

    {/* <!-- Copyright --> */}
   
    {/* <!-- Copyright --> */}
  </footer>


<div className='container-fluid'>
  <hr className='text-white'></hr>
</div>
  {/* <!-- Footer --> */}
  <div className='d-flex'>
  <p className='text-white'> <i class="text-white fa-solid fa-copyright"></i> Right Resrved</p>

<div className='text-end'>
   <p class=' design text-white text-end'>Designed And Developed BY  KANAK DRISHTI</p>
   </div>
</div></div>
{/* <!-- End of .container --> */}
<div>
</div>


   </>
  )
}

export default Footer
