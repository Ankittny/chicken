import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
// import {Link} from "react-router-dom";



const OfferBanner = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2,
          slidesToSlide: 1, // optional, default to 1.
        },
      };

    return (
   <>
    <div className="border-bottom p-3 d-none mobile-nav">
         <div className="title d-flex align-items-center">
            <a href="home.html" className="text-decoration-none text-dark d-flex align-items-center">
               <img className="osahan-logo mr-2" src="../assets/img/logo.png" />
               <h4 className="font-weight-bold text-success m-0">Buckect</h4>
            </a>
            <p className="ml-auto m-0">
               <a href="listing.html" className="text-decoration-none bg-white p-1 rounded shadow-sm d-flex align-items-center">
               <i className="text-dark icofont-sale-discount"></i>
               <span className="badge badge-danger p-1 ml-1 small">50%</span>
               </a>
            </p>
            <a className="toggle ml-3" href="#"><i className="icofont-navigation-menu"></i></a>
         </div>
         <a href="search.html" className="text-decoration-none">
            <div className="input-group mt-3 rounded shadow-sm overflow-hidden bg-white">
               <div className="input-group-prepend">
                  <button className="border-0 btn btn-outline-secondary text-success bg-white"><i className="icofont-search"></i></button>
               </div>
               <input type="text" className="shadow-none border-0 form-control pl-0" placeholder="Search for Products.." aria-label="" aria-describedby="basic-addon1" />
            </div>
         </a>
      </div>
      <div className="theme-switch-wrapper">
         <label className="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
            <i className="icofont-moon"></i>
         </label>
         <em>Enable Dark Mode!</em>
      </div>
      <div className="bg-white shadow-sm osahan-main-nav">
         <nav className="navbar navbar-expand-lg navbar-light bg-white osahan-header py-0 container">
            <a className="navbar-brand mr-0" href="home.html"><img className="img-fluid logo-img rounded-pill border shadow-sm" src="../assets/img/logo.png" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="ml-3 d-flex align-items-center">
               <div className="dropdown mr-3">
                  <a className="text-dark dropdown-toggle d-flex align-items-center osahan-location-drop" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <div><i className="icofont-location-pin d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm mr-2"></i></div>
                     <div>
                        <p className="text-muted mb-0 small">Select Location</p>
                        Maharashtra India...
                     </div>
                  </a>
                  <div className="dropdown-menu osahan-select-loaction p-3" aria-labelledby="navbarDropdown">
                     <span>Select your city to start shopping</span>
                     <form className="form-inline my-2">
                        <div className="input-group p-0 col-lg-12">
                           <input type="text" className="form-control form-control-sm" id="inlineFormInputGroupUsername2" placeholder="Search Location" />
                           <div className="input-group-prepend">
                              <div className="btn btn-success rounded-right btn-sm"><i className="icofont-location-arrow"></i> Detect</div>
                           </div>
                        </div>
                     </form>
                     <div className="city pt-2">
                        <h6>Top Citys</h6>
                        <p className="border-bottom m-0 py-1"><a href="#" className="text-dark">Banglore</a></p>
                        <p className="border-bottom m-0 py-1"><a href="#" className="text-dark">Noida</a></p>
                        <p className="border-bottom m-0 py-1"><a href="#" className="text-dark">Delhi</a></p>
                        <p className="m-0 py-1"><a href="#" className="text-dark">Mumbai</a></p>
                     </div>
                  </div>
               </div>
               <div className="input-group mr-sm-2 col-lg-12">
                  <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="Search for Products.." />
                  <div className="input-group-prepend">
                     <div className="btn btn-success rounded-right"><i className="icofont-search"></i></div>
                  </div>
               </div>
            </div>
            <div className="ml-auto d-flex align-items-center">
               <a href="#" data-toggle="modal" data-target="#login" className="mr-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
               <i className="icofont-login"></i>
               </a>
               <div className="dropdown">
                  <a href="#" className="text-dark dropdown-toggle not-drop" id="dropdownMenuNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="icofont-notification d-flex align-items-center bg-light rounded-pill p-2 icofont-size border shadow-sm">
                  </i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right p-0 osahan-notifications-main" aria-labelledby="dropdownMenuNotification">
                     <div className="osahan-notifications bg-white border-bottom p-2">
                        <div className="position-absolute ml-n1 py-2"><i className="icofont-check-circled text-white bg-success rounded-pill p-1"></i></div>
                        <a href="status_complete.html" className="text-decoration-none text-dark">
                           <div className="notifiction small">
                              <div className="ml-3">
                                 <p className="font-weight-bold mb-1">Yay! Order Complete</p>
                                 <p className="small m-0"><i className="icofont-ui-calendar"></i> Today, 05:14 AM</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="osahan-notifications bg-white border-bottom p-2">
                        <a href="status_onprocess.html" className="text-decoration-none text-muted">
                           <div className="notifiction small">
                              <div className="ml-3">
                                 <p className="font-weight-bold mb-1">Yipiee. order Success</p>
                                 <p className="small m-0"><i className="icofont-ui-calendar"></i> Monday, 08:30 PM</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="osahan-notifications bg-white p-2">
                        <a href="status_onprocess.html" className="text-decoration-none text-muted">
                           <div className="notifiction small">
                              <div className="ml-3">
                                 <p className="font-weight-bold mb-1">New Promos Coming</p>
                                 <p className="small m-0"><i className="icofont-ui-calendar"></i> Sunday, 10:30 AM</p>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
               <a href="cart.html" className="ml-2 text-dark bg-light rounded-pill p-2 icofont-size border shadow-sm">
               <i className="icofont-shopping-cart"></i>
               </a>
            </div>
         </nav>
         <div className="bg-color-head">
            <div className="container menu-bar d-flex align-items-center">
               <ul className="list-unstyled form-inline mb-0">
                  <li className="nav-item active">
                     <a className="nav-link text-white pl-0" href="home.html">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Products
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="listing.html">Listing</a>
                        <a className="dropdown-item" href="product_details.html">Detail</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="picks_today.html">Trending</a>
                        <a className="dropdown-item" href="recommend.html">Recommended</a>
                        <a className="dropdown-item" href="fresh_vegan.html">Most Popular</a>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Checkout Process
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="cart.html">Cart</a>
                        <a className="dropdown-item" href="checkout.html">Checkout</a>
                        <a className="dropdown-item" href="successful.html">Successful</a>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     My Order
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="my_order.html">My order</a>
                        <a className="dropdown-item" href="status_complete.html">Status Complete</a>
                        <a className="dropdown-item" href="status_onprocess.html">Status on Process</a>
                        <a className="dropdown-item" href="status_canceled.html">Status Canceled</a>
                        <a className="dropdown-item" href="review.html">Review</a>
                     </div>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Extra Pages
                     </a>
                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="verification.html">Verification</a>
                        <a className="dropdown-item" href="promos.html">Promos</a>
                        <a className="dropdown-item" href="promo_details.html">Promo Details</a>
                        <a className="dropdown-item" href="terms_conditions.html">Terms & Conditions</a>
                        <a className="dropdown-item" href="privacy.html">Privacy</a>
                        <a className="dropdown-item" href="terms%26conditions.html">Conditions</a>
                        <a className="dropdown-item" href="help_support.html">Help Support</a>
                        <a className="dropdown-item" href="help_ticket.html">Help Ticket</a>
                        <a className="dropdown-item" href="refund_payment.html">Refund Payment</a>
                        <a className="dropdown-item" href="faq.html">FAQ</a>
                        <a className="dropdown-item" href="signin.html">Sign In</a>
                        <a className="dropdown-item" href="signup.html">Sign Up</a>
                        <a className="dropdown-item" href="search.html">Search</a>
                     </div>
                  </li>
               </ul>
               <div className="list-unstyled form-inline mb-0 ml-auto">
                  <a href="picks_today.html" className="text-white px-3 py-2">Trending</a>
                  <a href="promos.html" className="text-white bg-offer px-3 py-2"><i className="icofont-sale-discount h6"></i>Promos</a>
               </div>
            </div>
         </div>
      </div>
      <nav aria-label="breadcrumb" className="breadcrumb mb-0 d-none">
         <div className="container">
            <ol className="d-flex align-items-center mb-0 p-0">
               <li className="breadcrumb-item"><a href="#" className="text-success">Home</a></li>
               <li className="breadcrumb-item active" aria-current="page"></li>
            </ol>
         </div>
      </nav>
      <section className="py-4 osahan-main-body">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="osahan-home-page">
                     <div className="osahan-body">
                        
                        <div className="py-3 osahan-promos">
                           {/* <div className="d-flex align-items-center mb-3">
                              <h5 className="m-0">Promos for you</h5>
                              <a href="promos.html" className="ml-auto btn btn-outline-success btn-sm">See more</a>
                           </div> */}
                           <Carousel
                    responsive={responsive}
                    showIndicators={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                  >
                           
                              <div className="osahan-slider-item mx-2">
                                 <a href="promo_details.html"><img src="../assets/img/promo1.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></a>
                              </div>
                              <div className="osahan-slider-item mx-2">
                                 <a href="promo_details.html"><img src="../assets/img/promo2.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></a>
                              </div>
                              <div className="osahan-slider-item mx-2">
                                 <a href="promo_details.html"><img src="../assets/img/promo3.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></a>
                              </div>
                              <div className="osahan-slider-item mx-2">
                                 <a href="promo_details.html"><img src="../assets/img/promo4.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></a>
                              </div>
                              <div className="osahan-slider-item mx-2">
                                 <a href="promo_details.html"><img src="../assets/img/promo2.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></a>
                              </div>
                              <div className="osahan-slider-item mx-2">
                                 <a href="promo_details.html"><img src="../assets/img/promo3.jpg" className="img-fluid mx-auto rounded" alt="Responsive image" /></a>
                              </div>
                           </Carousel>
                        </div>
                        <div className="title d-flex align-items-center py-3">
                           <h5 className="m-0">Pick's Today</h5>
                           <a className="ml-auto btn btn-outline-success btn-sm" href="picks_today.html">See more</a>
                        </div>
                        <div className="pick_today">
                           <div className="row">
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Chilli</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$0.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample1">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Onion</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$1.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample2">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v5.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Cauliflower</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$1.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample3">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-success">10%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v6.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Carrot</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$0.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample4">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">5%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v3.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Tomato</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$1/kg</h6>
                                       <a className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </a>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-warning">15%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v4.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Cabbage</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$0.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample5" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample5">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">10%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v1.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Chilli</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$0.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample6" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample6">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-6 col-md-3 mb-3">
                                 <div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                                    <div className="list-card-image">
                                       <a href="product_details.html" className="text-dark">
                                          <div className="member-plan position-absolute"><span className="badge m-3 badge-danger">5%</span></div>
                                          <div className="p-3">
                                             <img src="../assets/img/listing/v2.jpg" className="img-fluid item-img w-100 mb-3" />
                                             <h6>Onion</h6>
                                             <div className="d-flex align-items-center">
                                                <h6 className="price m-0 text-success">$1.8/kg</h6>
                                       <a data-toggle="collapse" href="#collapseExample7" role="button" aria-expanded="false" aria-controls="collapseExample7" className="btn btn-success btn-sm ml-auto">+</a>
                                       <div className="collapse qty_show" id="collapseExample7">
                                       <div>
                                       <span className="ml-auto" href="#">
                                       <form id='myform' className="cart-items-number d-flex" method='POST' action='#'>
                                       <input type='button' value='-' className='qtyminus btn btn-success btn-sm' field='quantity' />
                                       <input type='text' name='quantity' value='1' className='qty form-control' />
                                       <input type='button' value='+' className='qtyplus btn btn-success btn-sm' field='quantity' />
                                       </form>
                                       </span>
                                       </div>
                                       </div>
                                       </div>
                                       </div>
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                       
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <nav id="main-nav">
         <ul className="second-nav">
            <li><a href="home.html"><i className="icofont-smart-phone mr-2"></i> Home</a></li>
            <li>
               <a href="#"><i className="icofont-login mr-2"></i> Authentication</a>
               <ul>
                  <li><a className="dropdown-item" href="signin.html">Sign In</a></li>
                  <li><a className="dropdown-item" href="signup.html">Sign Up</a></li>
                  <li><a href="verification.html">Verification</a></li>
               </ul>
            </li>
            <li><a className="dropdown-item" href="listing.html">Listing</a></li>
            <li><a className="dropdown-item" href="product_details.html">Detail</a></li>
            <li><a className="dropdown-item" href="picks_today.html">Trending</a></li>
            <li><a className="dropdown-item" href="recommend.html">Recommended</a></li>
            <li><a className="dropdown-item" href="fresh_vegan.html">Most Popular</a></li>
            <li><a className="dropdown-item" href="cart.html">Cart</a></li>
            <li><a className="dropdown-item" href="checkout.html">Checkout</a></li>
            <li><a className="dropdown-item" href="successful.html">Successful</a></li>
            <li>
               <a href="#"><i className="icofont-sub-listing mr-2"></i> My Order</a>
               <ul>
                  <li><a className="dropdown-item" href="my_order.html">My order</a></li>
                  <li><a className="dropdown-item" href="status_complete.html">Status Complete</a></li>
                  <li><a className="dropdown-item" href="status_onprocess.html">Status on Process</a></li>
                  <li><a className="dropdown-item" href="status_canceled.html">Status Canceled</a></li>
                  <li><a className="dropdown-item" href="review.html">Review</a></li>
               </ul>
            </li>
            <li>
               <a href="#"><i className="icofont-ui-user mr-2"></i> My Account</a>
               <ul>
                  <li><a className="dropdown-item" href="my_account.html">My account</a></li>
                  <li><a className="dropdown-item" href="promos.html">Promos</a></li>
                  <li><a className="dropdown-item" href="my_address.html">My address</a></li>
                  <li><a className="dropdown-item" href="terms_conditions.html">Terms & conditions</a></li>
                  <li><a className="dropdown-item" href="help_support.html">Help & support</a></li>
                  <li><a className="dropdown-item" href="help_ticket.html">Help ticket</a></li>
                  <li><a className="dropdown-item" href="signin.html">Logout</a></li>
               </ul>
            </li>
            <li>
               <a href="#"><i className="icofont-page mr-2"></i> Pages</a>
               <ul>
                  <li><a className="dropdown-item" href="verification.html">Verification</a></li>
                  <li><a className="dropdown-item" href="promos.html">Promos</a></li>
                  <li><a className="dropdown-item" href="promo_details.html">Promo Details</a></li>
                  <li><a className="dropdown-item" href="terms_conditions.html">Terms & Conditions</a></li>
                  <li><a className="dropdown-item" href="privacy.html">Privacy</a></li>
                  <li><a className="dropdown-item" href="terms%26conditions.html">Conditions</a></li>
                  <li><a className="dropdown-item" href="help_support.html">Help Support</a></li>
                  <li><a className="dropdown-item" href="help_ticket.html">Help Ticket</a></li>
                  <li><a className="dropdown-item" href="refund_payment.html">Refund Payment</a></li>
                  <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                  <li><a className="dropdown-item" href="signin.html">Sign In</a></li>
                  <li><a className="dropdown-item" href="signup.html">Sign Up</a></li>
                  <li><a className="dropdown-item" href="search.html">Search</a></li>
               </ul>
            </li>
            <li>
               <a href="#"><i className="icofont-link mr-2"></i> Navigation Link Example</a>
               <ul>
                  <li>
                     <a href="#">Link Example 1</a>
                     <ul>
                        <li>
                           <a href="#">Link Example 1.1</a>
                           <ul>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                           </ul>
                        </li>
                        <li>
                           <a href="#">Link Example 1.2</a>
                           <ul>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                              <li><a href="#">Link</a></li>
                           </ul>
                        </li>
                     </ul>
                  </li>
                  <li><a href="#">Link Example 2</a></li>
                  <li><a href="#">Link Example 3</a></li>
                  <li><a href="#">Link Example 4</a></li>
                  <li data-nav-custom-content>
                     <div className="custom-message">
                        You can add any custom content to your navigation items. This text is just an example.
                     </div>
                  </li>
               </ul>
            </li>
         </ul>
         <ul className="bottom-nav">
            <li className="email">
               <a className="text-success" href="home.html">
                  <p className="h5 m-0"><i className="icofont-home text-success"></i></p>
                  Home
               </a>
            </li>
            <li className="github">
               <a href="cart.html">
                  <p className="h5 m-0"><i className="icofont-cart"></i></p>
                  CART
               </a>
            </li>
            <li className="ko-fi">
               <a href="help_ticket.html">
                  <p className="h5 m-0"><i className="icofont-headphone"></i></p>
                  Help
               </a>
            </li>
         </ul>
      </nav>
      <footer className="section-footer border-top bg-white">
         <section className="footer-top py-4">
            <div className="container">
               <div className="row">
                 
                  <div className="col-md-4">
                     <form>
                        <div className="input-group">
                           <input type="text" placeholder="Email" className="form-control" name="" />
                           <span className="input-group-append">
                           <button type="submit" className="btn btn-success"> Subscribe</button>
                           </span>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-8 text-md-right">
                     <a href="#" className="btn btn-icon btn-light"><i className="icofont-facebook"></i></a>
                     <a href="#" className="btn btn-icon btn-light"><i className="icofont-twitter"></i></a>
                     <a href="#" className="btn btn-icon btn-light"><i className="icofont-instagram"></i></a>
                     <a href="#" className="btn btn-icon btn-light"><i className="icofont-youtube"></i></a>
                  </div>
               </div>
            </div>
         </section>
         <section className="footer-main border-top pt-5 pb-4">
            <div className="container">
               <div className="row">
                  <aside className="col-md">
                     <h6 className="title">Products</h6>
                     <ul className="list-unstyled list-padding">
                        <li> <a href="listing.html" className="text-dark">Listing</a></li>
                        <li> <a href="product_details.html" className="text-dark">Detail</a></li>
                        <li> <a href="picks_today.html" className="text-dark">Trending</a></li>
                        <li> <a href="recommend.html" className="text-dark">Recommended</a></li>
                        <li> <a href="fresh_vegan.html" className="text-dark">Most Popular</a></li>
                     </ul>
                  </aside>
                  <aside className="col-md">
                     <h6 className="title">Checkout Process</h6>
                     <ul className="list-unstyled list-padding">
                        <li> <a href="cart.html" className="text-dark">Cart</a></li>
                        <li> <a href="cart.html" className="text-dark">Order Address</a></li>
                        <li> <a href="cart.html" className="text-dark">Delivery Time</a></li>
                        <li> <a href="cart.html" className="text-dark">Order Payment</a></li>
                        <li> <a href="checkout.html" className="text-dark">Checkout</a></li>
                        <li> <a href="successful.html" className="text-dark">Successful</a></li>
                     </ul>
                  </aside>
                  <aside className="col-md">
                     <h6 className="title">My Order</h6>
                     <ul className="list-unstyled list-padding">
                        <li> <a href="my_order.html" className="text-dark">My order</a></li>
                        <li> <a href="status_complete.html" className="text-dark">Status Complete</a></li>
                        <li> <a href="status_onprocess.html" className="text-dark">Status on Process</a></li>
                        <li> <a href="status_canceled.html" className="text-dark">Status Canceled</a></li>
                        <li> <a href="review.html" className="text-dark">Review</a></li>
                     </ul>
                  </aside>
                  <aside className="col-md">
                     <h6 className="title">My Account</h6>
                     <ul className="list-unstyled list-padding">
                        <li> <a className="text-dark" href="my_account.html"> My account</a></li>
                        <li> <a className="text-dark" href="promos.html"> Promos</a></li>
                        <li> <a className="text-dark" href="my_address.html"> My address</a></li>
                        <li> <a className="text-dark" href="terms_conditions.html"> Terms &amp; conditions</a></li>
                        <li> <a className="text-dark" href="help_support.html"> Help &amp; support</a></li>
                        <li> <a className="text-dark" href="help_ticket.html"> Help ticket</a></li>
                        <li> <a className="text-dark" href="signin.html"> Logout</a></li>
                     </ul>
                  </aside>
                  <aside className="col-md">
                     <h6 className="title">Extra Pages</h6>
                     <ul className="list-unstyled list-padding">
                        <li><a href="promo_details.html" className="text-dark"> Promo Details </a></li>
                        <li><a href="terms_conditions.html" className="text-dark"> Conditions </a></li>
                        <li><a href="help_support.html" className="text-dark"> Help Support </a></li>
                        <li><a href="refund_payment.html" className="text-dark"> Refund Payment </a></li>
                        <li><a href="faq.html" className="text-dark"> FAQ </a></li>
                        <li><a href="signin.html" className="text-dark"> Sign In </a></li>
                     </ul>
                  </aside>
               </div>
            </div>
         </section>
         <section className="footer-bottom border-top py-4">
            <div className="container">
               <div className="row">
                  <div className="col-md-6">
                     <span className="pr-2">© 2023 Dubucket</span>
                     <span className="pr-2"><a href="privacy.html" className="text-dark">Privacy</a></span>
                     <span className="pr-2"><a href="terms%26conditions.html" className="text-dark">Terms & Conditions</a></span>
                  </div>
                  <div className="col-md-6 text-md-right">
                     <Link to="#"><img src="img/appstore.png" height="30" /></Link>
                     <Link to="#"><img src="img/playmarket.png" height="30" /></Link>
                  </div>
               </div>
            </div>
         </section>
       
      </footer>
   </>
    );
 }
 export default OfferBanner;
 