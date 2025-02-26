const header=`
 <nav id="Nav" class="navbar navbar-expand-lg bg-white" data-bs-theme="light" style="backdrop-filter:blur(5px); position: fixed; z-index: 1000; width: 100%;">
        <div class="container-fluid">
         <a href="index.html"><img src="assest/img/logo.png" alt="" style="height: 60px; width: 250px;"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse ms-20" id="navbarColor03" >
            <ul class="navbar-nav m-auto fs-5">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">Home
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hair Problems</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="hireloss.html">Hair Loss</a>
                  <a class="dropdown-item" href="graying.html">Graying</a>
                  <a class="dropdown-item" href="growth related.html">Growth Related</a>
                  
                  <a class="dropdown-item" href="premature baldness.html">Premature Baldness</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hair Equipments</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="Straighner.html" >Straightners</a>
                  <a class="dropdown-item" href="dryers.html" >Dryers</a>
                  <a class="dropdown-item" href="Spray bottle.html">Spray Bottles</a>
                  <a class="dropdown-item" href="Steamers.html" >Steamers</a>
                  <a class="dropdown-item" href="Massagers.html" >Massagers</a>
                  <a class="dropdown-item" href="Spa Caps.html" >Spa Caps</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hair Products</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="haircream.html">Hair Cream</a>
                  <a class="dropdown-item" href="hairshampo.html">Shampoo</a>
                  <a class="dropdown-item" href="Conditioner.html" >Conditioner</a>
                  <a class="dropdown-item" href="masks.html" >Masks</a>
                  <a class="dropdown-item" href="serums.html" >Serums</a>
                  <a class="dropdown-item" href="Hairspray.html" >Hairsprays</a>
                  <a class="dropdown-item" href="Hair oil.html" >Various Hair Oils</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="gallery.html">Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contactus.html">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="compare.html">Compare</a>
              </li>
            
             
            </ul>
            <div>
            </div>
          </div>
        </div>
      </nav>
`
document.querySelector("nav").innerHTML=header
const footer=`
  <div class="p-3 mb-2 " id="footer">
    <footer class="text-center text-lg-start bg-body-tertiary text-muted ">
    </footer>
    <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      <a href="https://www.facebook.com/share/1CEtJdTagr/" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.pinterest.com/pin/17099673580911318/" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/hairhavenoffical/" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/ismail-ahmed-askari-676a98324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/Ismail-Askari" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-4">
     
      <div class="row mt-3">
        
         <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
           <h6 class="text-uppercase fw-bold mb-4">
           <img id="footerlogo" src="assest/img/logo.png" style=" height: 12vh; width: 35vh;" alt="">
          </h6>
          <p>
            Hair Heaven is your go-to source for premium hair care products, expert tips, and styling inspiration. We’re here to help you achieve your healthiest, most beautiful hair every day.


          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Hair Problems
          </h6>
          <p>
            <a href="hireloss.html" class="text-reset">Hair Loss </a>
          </p>
          <p>
            <a href="#!" class="text-reset">Graying</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Growth</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Premature Baldness</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="dryers.html" class="text-reset">Dryers</a>
          </p>
          <p>
            <a href="Spray bottle.html" class="text-reset">Spray Bottles</a>
          </p>
          <p>
            <a href="Straighner.html" class="text-reset">Straightners</a>
          </p>
          <p>
            <a href="Hair oil.html" class="text-reset">Various Hair Oils</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i>Pakistan, South Asia</p>
          <p>
            <i class="fas fa-envelope me-3"></i>Hairheaven@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 92 301 2863 307</p>
          <p><i class="fas fa-phone me-3"></i> + 92 317 2345 412</p>
          <p><i class="fas fa-phone me-3"></i> + 92 322 3183 074</p>
          
        </div>
      </div>
    </div>
  </section>
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.945);">
    © 2025 Copyright:
    <a class="text-reset fw-bold" style="color: white;" href="index.html">HAIR HEAVEN.com</a>
  </div>
</footer>  
</div> 


`
document.querySelector(".footer").innerHTML=footer