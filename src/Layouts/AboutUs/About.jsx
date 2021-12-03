import React from "react";
import './About.css';
import logo from '../Home/images/happy-smiley-family-front-view 1.png';
import team from '../Home/images/Ellipse 32.png';
import awards from '../Home/images/awards.png';
import featured from '../Home/images/featured-news.png';

export class AboutUs extends React.Component{
      render (){
          return(
          <section>
                  <div id="about-section">
                       <div className="container container-wrapper">
                           <div className="row">
                               <div className="col-md-6 main-box">
                                  <h2>Our Story</h2>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus volutpat rhoncus a dui diam. Neque, eget mauris fermentum nibh ac ut. Morbi tristique non sed ut. Sagittis, sit pellentesque neque, etiam pretium, fermentum cursus sem.
                                   Lectus sagittis ac tempor in egestas est sed. Faucibus quisque quisque sed scelerisque nibh. Volutpat ac, purus integer felis sit fermentum. Posuere senectus pellentesque justo nibh mattis tempus nulla. Urna felis elementum ipsum non faucibus euismod praesent. </p>
                              </div>
                              <div className="col-md-6 main-box-right">
                                  <img src={logo} alt=""></img>
                               </div>
                          </div>
                       </div>
                     </div>

              <div id="team">
               <div className="container container-wrapper">
                 <h2>Our Team</h2>
                 <p>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, </p>
                 <div className="row">
                 <div class="col-md-4 col-12 team-box">
                     <img src={team} alt="" />
                     <h3>Anurag Garg, CFA</h3>
                     <h4>Founder & Chief Executive Officer</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                   </div>
                   <div class="col-md-4 col-12 team-box">
                     <img src={team} alt="" />
                     <h3>Anurag Garg, CFA</h3>
                     <h4>Founder & Chief Executive Officer</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                   </div>
                   <div class="col-md-4 col-12 team-box">
                     <img src={team} alt="" />
                     <h3>Anurag Garg, CFA</h3>
                     <h4>Founder & Chief Executive Officer</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                   </div>
                   <div class="col-md-4 col-12 team-box">
                     <img src={team} alt="" />
                     <h3>Anurag Garg, CFA</h3>
                     <h4>Founder & Chief Executive Officer</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                   </div>

                   <div class="col-md-4 col-12 team-box">
                     <img src={team} alt="" />
                     <h3>Anurag Garg, CFA</h3>
                     <h4>Founder & Chief Executive Officer</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                   </div>
                   <div class="col-md-4 col-12 team-box">
                     <img src={team} alt="" />
                     <h3>Anurag Garg, CFA</h3>
                     <h4>Founder & Chief Executive Officer</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                   </div>
                 </div>
               </div>
            </div>

            <div id="about-investor">
               <div className="container container-wrapper">
                    <h2>Investor </h2>
                      <div className="row row justify-content-md-center">
                          <div className="col-md-4 col-12 achieve-box">
                            <div className="card">
                              <div className="card-body">
                              <img src={team} alt="" />        
                              <h3>Technologies</h3>
                              <a href="#" class="btn btn-primary">More</a>
                                </div>
                              </div>
                         </div>
                         <div className="col-md-4 col-12 achieve-box">
                            <div className="card">
                              <div className="card-body">
                              <img src={team} alt="" />        
                              <h3>Technologies</h3>
                              <a href="#" class="btn btn-primary">More</a>
                                </div>
                              </div>
                         </div>
                         <div className="col-md-4 col-12 achieve-box">
                            <div className="card">
                              <div className="card-body">
                              <img src={team} alt="" />        
                              <h3>Technologies</h3>
                              <a href="#" class="btn btn-primary">More</a>
                                </div>
                              </div>
                         </div>
                      
                      </div>
               </div>
            </div>

            <div id="our-partners">
               <div className="container container-wrapper">
                    <h2>Investor </h2>
                      <div className="row row justify-content-md-center">
                          <div className="col-md-4 col-12 achieve-box">
                            <div className="card">
                              <div className="card-body">
                              <img src={team} alt="" />        
                              <h3>PNB Housing Finance Ltd.</h3>
                                </div>
                              </div>
                         </div>
                         <div className="col-md-4 col-12 achieve-box">
                            <div className="card">
                              <div className="card-body">
                              <img src={team} alt="" />        
                              <h3>PNB Housing Finance Ltd.</h3>
                                </div>
                              </div>
                         </div>
                         <div className="col-md-4 col-12 achieve-box">
                            <div className="card">
                              <div className="card-body">
                              <img src={team} alt="" />        
                              <h3>PNB Housing Finance Ltd.</h3>
                                </div>
                              </div>
                         </div>
                      
                      </div>
               </div>
            </div>

            <div id="about-stats">
              <div className="container container-wrapper">
                <div className="row align-items-center">
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box">
                       <h3> 11,000+</h3>
                       <h4>CUSTOMERS</h4>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box">
                     <h3> 1,000+</h3>
                       <h4>PARTNERS</h4>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box">
                       <h3>400,000+</h3>
                       <h4>TRANSACTIONS EXECUTED</h4>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box">
                       <h3>1,000 Cr+</h3>
                       <h4>TOTAL TRANSACTION VALUE</h4>
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

export default AboutUs;