import React from 'react';
import './Home.css';
import logo from './images/happy-smiley-family-front-view 1.png';
import gimg1 from './images/happy-smiley-family-front-view 1.png';
import pimg1 from './images/customer.png';
import img from './images/map 2.png';
import img1 from './images/partner.png';
import transaction from './images/transaction 1.png';
import awards from './images/awards.png'
import featured from './images/featured-news.png';
import aimg1 from './images/FD-2.png'
import aimg2 from './images/FD-2.png'
import aimg3 from './images/FD-2.png'
import aimg4 from './images/FD-2.png'
import aimg5 from './images/FD-2.png'
import aimg6 from './images/FD-2.png'
import aimg7 from './images/FD-2.png'
import aimg8 from './images/FD-2.png'
import API from '../../Component/API/api'
import NumbersAPI from '../../Component/NumbersAPI/NApi'



export class Home extends React.Component {
  render() {
    return (
      <section>
          
           <div className="container container-wrapper">
             <div className="row">
            <div className="col-md-6 main-box">

             <NumbersAPI />
           
                    <h2>HEADLINE</h2>
                    <p>World-class wealth management using science, data and technology, leveraged by our experience, and human touch.</p>
                    <button type="button" class="btn btn-primary btn-lg">CTA</button>
                </div>
                   <div className="col-md-6 main-box-right">
                     <img src={logo} alt=""></img>
                    </div>
               </div> 
               
            </div>
            

          <div id="goals">
           <div class="container container-wrapper">
              <h2>Set your Goals</h2>
                <div className="row">
                     <div class="col-lg-3 col-md-6 col-12 mb-4">
                        <div class="card">
                            <img src={gimg1} alt="" width="100%"></img>
                              <div class="card-body">
                                <h5 class="card-title">Save For Children</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More</a>
                             </div>
                        </div>
                      </div> 
                      <div class="col-lg-3 col-md-6 col-12 mb-4">
                        <div class="card">
                            <img src={gimg1} alt="" width="100%"></img>
                              <div class="card-body">
                                <h5 class="card-title">Save Tax</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More</a>
                             </div>
                        </div>
                      </div> 
                      <div class="col-lg-3 col-md-6 col-12 mb-4">
                        <div class="card">
                            <img src={gimg1} alt="" width="100%"></img>
                              <div class="card-body">
                                <h5 class="card-title">Retirement Plan</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More</a>
                             </div>
                        </div>
                      </div> 
                      <div class="col-lg-3 col-md-6 col-12 mb-4">
                        <div class="card">
                            <img src={gimg1} alt="" width="100%"></img>
                              <div class="card-body">
                                <h5 class="card-title">Build Long Tearm Welth</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">More</a>
                             </div>
                        </div>
                      </div> 
                </div>
            </div>
          </div>  

            <div id="achieve-goal">
               <div className="container container-wrapper">
                    <h2>We help you achieve your Goals </h2>
                    <h6>With a combination of Technology & Human Touch</h6>
                      <div className="row row justify-content-md-center">
                          <div className="col col-lg-4 achieve-box">
                            <div className="card mb-4">
                              <div className="card-body">
                              <h3>Technologies</h3>
                              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia.</p>
                              <a href="#" class="btn btn-primary">More</a>
                                </div>
                              </div>
                         </div>
                         <div className="col col-lg-4 achieve-box">
                         <div className="card mb-4">
                         <div className="card-body">
                           <h3>Human Toch</h3>
                           <p>Nemo enim ipsam voluptatem quia voluptas sit aspernaturaut odit aut fugit, sed quia.</p>
                           <a href="#" class="btn btn-primary">More</a>
                           </div>
                           </div>
                         </div>
                      </div>
               </div>
            </div>

             <div id="products">
               <div className="container">
                 <h2>Access All Products</h2>
                 <div className="row">
                 <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg1} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg2} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg3} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg4} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>

                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg5} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg6} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg7} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                   <div class="col-lg-3 col-md-6 col-12">
                     <img src={aimg8} alt="" width="100%"></img>
                     <button id="product-button" type="button" name="button">Mutual Fund</button>
                   </div>
                 </div>
               </div>
            </div>

          <div id="map-section">
            <div className="container container-wrapper">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={img} alt="" />
                </div>
               <div className="col-md-6">
                 <div className="map-flex">
                   <img src={img1} alt="" />
                    <h3>1,000+ PARTNERS SPREAD OVER 130 CITIES ACROSS INDIA</h3>
                 </div>
                 <div className="map-flex">
                   <h3>1,000+ PARTNERS SPREAD OVER 130 CITIES ACROSS INDIA</h3>
                   <img src={pimg1} alt="" />
                 </div>
               </div>
              </div>
            </div>
          </div>

          <div id="redsection-stats">
              <div className="container container-wrapper">
                <div className="row align-items-center">
                   <div className="col-md-4 col-12">
                     <div className="card-box">
                       <h3>400,000+</h3>
                       <h4>TRANSACTIONS EXECUTED</h4>
                     </div>
                   </div>
                   <div className="col-md-4 col-12">
                     <div className="card-box">
                       <img src={transaction} alt="" />
                     </div>
                   </div>
                   <div className="col-md-4 col-12">
                     <div className="card-box">
                       <h3>400,000+</h3>
                       <h4>TRANSACTIONS EXECUTED</h4>
                     </div>
                   </div>
                </div>
              </div>
          </div>
    
           <div id="awards">
                <div class="container container-wrapper">
                  <h2>We are an Award-winning platform</h2>
                  <div className="row">
                    <div className="col-md-4 col-12 awards-box">
                      <img src={awards} alt="" />
                      <h3>Startup Superhero Hunt 2018</h3>

                    </div>
                    <div className="col-md-4 col-12 awards-box">
                      <img src={awards} alt="" />
                      <h3>Startup Superhero Hunt 2018</h3>

                    </div>
                    <div className="col-md-4 col-12 awards-box">
                      <img src={awards} alt="" />
                      <h3>Startup Superhero Hunt 2018</h3>

                    </div>

                  </div>
                </div>
          </div>

          <div id="featured-news">
                     <div className="container container-wrapper">
                                         <h2>Featured in news</h2>
                                         <img src={featured} alt="" />

                     </div>

           </div>
      </section>
    );
  }
}

export default Home;
