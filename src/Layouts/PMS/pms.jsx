import React, { Component } from 'react'
import pms1 from "../Home/images/Rectangle 2143.png"
import circle from "../Home/images/Ellipse 32.png"

export class pms extends Component {

   constructor() {
      super()
  
      this.state = {
         items: [],
         MainTitle:[],
         isLoaded: false
      }
  }
        
  componentDidMount() {
      const url = 'https://nivesh.com/webapi_ucc/API/getSchemeDataFromProduct';
      const postBody = {
           ProductCategoryId: 3,
           ClientCode: "",
           LanguageId: 1,
           device: "" ,
           AMCCode: "" ,
           SebiCategoryId:"" ,
           SebiSubCategoryId:"" ,
           DefaultProductId: ""
      };
      const requestMetadata = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(postBody)
      };
  
      fetch(url, requestMetadata)
      .then(response => response.json())
       .then(data=> {
          this.setState({isLoaded:true, items:data.ObjectResponse.SchemeDataList, MainTitle:data.ObjectResponse.TitleResponse});
          });
  }
    render() {

      const { isLoaded, items, MainTitle } = this.state;
        if (!isLoaded) return null;
        return (
            <section>
      
      <div class="container container-wrapper">
         <div class="row">
            <div class="col-lg-8">
               <h2>Lorem ipsum dolor sit amet</h2>
               <p>Investments are mainly dependent on financial goals. Based on goals, investors choose to invest their funds in a wide range of investments like stocks, bonds, and cash equivalents. These investments are generally chosen based on the investor’s risk appetite. Depending on the same, funds are split between different instruments. 
As a new investor, finding the right tool of investment can be a difficult task. You will need to have a good knowledge base not just about securities but also to understand how you can calculate your benefits and gains against your risk and losses.
This is where Portfolio Management Services (PMS) come in. 
</p>
               
                  <a href="#" title="" class="btn btn-primary">Start Investing</a>
             
            </div>
            <div class="col-lg-4"><img src={pms1}/></div>
         </div>
      </div>
      <div className="API-Section">
         <div className="container container-wrapper">
              <div className="api">
                <h2>{MainTitle && MainTitle[1]?.Title}</h2>
                
                {items && items.map((item) => (

                <div>
                  
                <table class="table api-table">
                    <thead class="thead-blue">
                       <tr>
                          <th colspan="4">{item.SchemeName}
                           <a href={`https://www.nivesh.com//WebApp/Home/Index?AMCCode=${item.AMCCode}&selectedcategoryId=${item.Product_category_id}`} target="_blank" class="api-button">Invest Now</a></th>
                   
                        
                        </tr>
                    </thead>
                     <tr id="below-head" colspan="4">
                        <td >1 Year</td>
                        <td >2 Year</td>
                        <td >3 Year</td>
                        <td >5 Year</td>
                    </tr>
                    <tr id="below-head-values">
                        <td >{item.OneYearReturn}%</td>
                        <td >{item.TwoYearReturn}%</td>
                        <td>{item.ThreeYearReturn}%</td>
                        <td>${item.FiveYearReturn}%</td>
                    </tr>
                </table>
            </div>
                ))}
            </div>
         </div>
      </div>
      <div class="container features">
         <div class="row">
            <div class="col-lg-12">
               <h2> Features and Benefits of Portfolio Management Services</h2>
               <p>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, </p>
            </div>
              <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Asset Allocation:</h4>
                     <p>Dividing your investment among different asset classes is defined as asset allocation. This mix needs to be done in such a way that the investors can safeguard their funds from risk and generate superior returns on them. 
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Customization: </h4>
                     <p>Portfolio Management Services provides a customized investment solution to investors. Portfolio managers have the liberty to diversify an investor's portfolio depending upon his risk appetite and returns generated on his existing investments.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Portfolio performance tracking:</h4>
                     <p>Tracking the performance of a portfolio is one of the benefits of a PMS service. You can track your holdings in real-time and the investor is updated with the market situation as well.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Risk management:</h4>
                     <p> Investments come with a certain degree of risk. With the best PMS services, you can control the amount of risk you would want to take. With real-time tracking, under the Non-discretionary PMS, you can decide if the invested instrument needs to be held or redeemed before maturity</p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Maintaining liquidity:</h4>
                     <p>Investments are made to fulfill financial goals. The best PMS services provider in India helps in maintaining liquidity so that you can redeem your investment in time of need.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Knowledge:</h4>
                     <p>The best Portfolio Management Services can help in reaching your financial goals. Apart from this it also helps investors in understanding their finances.  By imparting continuous knowledge and investment strategies, it helps investors to understand how the funds work and helps in making informed choices.
                     </p>
                  </div>
               </div>
            <div class="ctaBtn"><a href="#">CTA</a></div>
         </div>
      </div>
      <div class="getCustomer">
         <div class="container ourPartnerWrp">
         <h2>Types of Portfolio Management Services</h2>
               <p>There are two types of Portfolio Management Services provided by the best portfolio management companies in India</p>
            <div class="row row justify-content-md-center ">
               <div class=" col col-lg-4">
                  <div className="pms-products">
                  <div class="card mb-lg-md-sm-4">
                     <div className="card-body">
                     <h3>Discretionary Portfolio Management Service:</h3>
                     <p>In discretionary PMS service, it is the portfolio manager that independently and individually manages the funds and securities. Investors do not have to make any financial decisions. They inform the portfolio manager of their needs and the manager works following them.
                     </p>
                     <div class="ctaBtn"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  </div>
               </div>
               <div class="col col-lg-4">
               <div className="pms-products">
                  <div class="card mb-lg-md-sm-4">
                     <div className="card-body">
                     <h3>Non- discretionary Portfolio Management Service:</h3>
                     <p>When the portfolio manager manages the funds in harmony with the directions of the client it is termed as a non-discretionary Portfolio Management Service.
                     </p>
                     <div class="ctaBtn"><a href="#">Read More</a></div>
                     </div>
                  </div>
                  </div>
            </div>
         </div>
         <div class="ctaBtnOur"><a href="#">CTA</a></div>
      </div>
      </div>
      

      <div class="landingPlatforms">
         <div class="container">
            <div class="row">
               <h2>How does Portfolio Management Service work?</h2>
               <p>Portfolios are generally an accumulation of various investment funds. These include equity, mutual funds, bonds, etc.  Based on the financial plan of the investor, the appropriate tool is used. Apart from gaining superior returns, investors seek to invest in a fund that is low in volatility. <br/><br/>
               Seasoned professional fund managers manage the PMS services. Investors use PMS services to avail themselves of the services of a portfolio manager’s advice and service to protect their money. The best PMS Fund offers investment solutions that are customized for their investors.<br/><br/>
               Once you decide on availing of PMS services, you will need to open a separate bank and Demat Account. Investments made in your name will be held in this Demat account and any dividend or return from the funds will be credited to your bank account.<br/><br/>
               Your portfolio manager will be the one handling the account and you will have complete access to the accounts as well. The movement of your investments will depend on what type of PMS service you choose to avail.  According to SEBI guidelines, your portfolio manager will have to give a performance report at least every six months. 
               </p>
            </div>
         </div>
      </div>
      
      <div id="about-stats">
              <div className="container container-wrapper">
                <div className="row align-items-center">
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box mb-lg-md-sm-4">
                       <h3> 11,000+</h3>
                       <h4>CUSTOMERS</h4>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box mb-lg-md-sm-4">
                     <h3> 1,000+</h3>
                       <h4>PARTNERS</h4>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-6 col-12">
                     <div className="card-box mb-lg-md-sm-4">
                       <h3>400,000+</h3>
                       <h4>TRANSACTIONS EXECUTED</h4>
                     </div>
                   </div>
                   <div className="col-lg-3 col-md-6 col-12 mb-lg-md-sm-4">
                     <div className="card-box mb-lg-md-sm-4">
                       <h3>1,000 Cr+</h3>
                       <h4>TOTAL TRANSACTION VALUE</h4>
                     </div>
                   </div>
                </div>
              </div>
          </div>
      <div class="calCulator">
         <div class="container">
         <h2>PMS calculator</h2>
            <div class="row">
            
               <div class="col-lg-7">
                  <form>
                     <div class="lftCal">
                        <div class="radioDiv">
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                              <label class="form-check-label" for="flexRadioDefault1">See Maturity Value </label>
                           </div>
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked=""/>
                              <label class="form-check-label" for="flexRadioDefault2">Build up to a goal</label>
                           </div>
                        </div>
                        <div class="form-group">
                           <label for="exampleFormControlFile1">Investment amount</label>
                           <input type="text" class="form-control-file" id="exampleFormControlFile1" name=""/>
                        </div>
                        <div class="form-group selectDiv">
                           <label for="interest">Type</label>
                           <select class="form-select" aria-label="Default select example">
                              <option selected="">Select Interest rate</option>
                              <option value="1">12%</option>
                              <option value="2">10%</option>
                              <option value="3">8%</option>
                           </select>
                        </div>
                        <div class="form-group selectDiv">
                           <label for="loantenure ">Your age</label>
                           <select class="form-select" aria-label="Default select example">
                              <option selected="">Select Loan Tenure</option>
                              <option value="1">3 Months</option>
                              <option value="2">6 Months</option>
                              <option value="3">9 Months</option>
                           </select>
                        </div>
                        <div class="clearDiv"></div>
                        <div class="calCulatBtn"> <input type="submit" value="Calculate"/></div>
                     </div>
                  </form>
               </div>
               <div class="col-lg-5 pricipalDiv">
                  <div class="princiPalLft">Principal :</div>
                  <div class="princiPalRgt">10,000</div>
                  <div class="princiPalLft">Interest Payable :</div>
                  <div class="princiPalRgt">201</div>
                  <div class="princiPalLft">Total Amount Payble  :</div>
                  <div class="princiPalRgt">10,201</div>
                  <div class="princiPalLft">Your Monthly EMI  :</div>
                  <div class="princiPalRgt">3,400</div>
                  <div class="clearDiv"></div>
               </div>
            </div>
         </div>
      </div>
      
      <div class="container testimonials">
         <div class="row">
            <div class="col-lg-12">
               <h2>Frequently Asked Questions</h2>
               <div id="accordion">
                  <h3>Is it worth investing in PMS?</h3>
                  <p>For most retail investors, PMS services are not a viable option, given the high starting amount. Portfolio management services are aimed at HNIs who wish to invest in a multitude of investing options. However, when it comes to retail investors PMS services can be a deterrent considering the high amount required to start with. </p>

                  <h3>What is the minimum amount of PMS in India?</h3>
                  <p>According to SEBI guidelines, the minimum investment amount is INR 50 lakhs.</p>

                  <h3>What is the difference between AIF and PMS?</h3>
                  <p>Alternate Investment Funds gives the investor the flexibility to invest in derivatives, hedge funds, listed & unlisted shares and also have a certain amount of lock-in period.  PMS services monitor and create a personalized portfolio for investors to lower the risk and maximize the returns. Portfolio Management service funds, typically are liquid and do not have any lock in periods. However, both products tend to have high risk and high reward stances.</p>

                  <h3>How can I put money in my PMS account?</h3>
                  <p>Before investing in a PMS account, you will first need to establish a separate bank Demat account. Once the account is opened you will need to give a power of attorney to your portfolio manager over this bank account and Demat account. You will have the right to access these accounts and your portfolio manager will have to share a performance review of your investment once every six months. </p>

                  <h3>Can an NRI avail of the Portfolio Management Service?</h3>
                  <p>As per RBI guidelines, NRIs can invest in a PMS account by opening a Portfolio Investment Scheme account. This has to be done through banks and other financial distributors. </p>
                  
               </div>
            </div>
         </div>
      </div>
      
            </section>
        )
    }
}

export default pms
