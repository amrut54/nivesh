import React, { Component } from 'react'
import fd1 from "../Home/images/Rectangle 2143.png"
import circle from "../Home/images/Ellipse 32.png"

export class fd extends Component {

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
           ProductCategoryId: 2,
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
      <div id="js-preloader" class="js-preloader">
         <div class="preloader-inner">
            <span class="dot"></span>
            <div class="dots">
               <span></span>
               <span></span>
               <span></span>
            </div>
         </div>
      </div>
    
      <div class="container">
         <div class="row">
            <div class="col-lg-8">
               <h2>Make a smart investment decision with Corporate Fixed Deposit</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan cursus. Fusce eu porttitor orci, vel interdumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan cursus. Fusce eu porttitor orci, vel interdum</p>
               <div class="registerFair">
                  <a href="#" title="" class="startInvest">Start Investing</a>
               </div>
            </div>
            <div class="col-lg-4"><img src={fd1} /></div>
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
               <h2>Why Nivesh</h2>
               <p>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, </p>
            </div>
              <div class="col-lg-3">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>High Interest Rate</h4>
                     <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Zero Hassle</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>100% Secure</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>More Option</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
         </div>
         <div class="ctaBtn"><a href="#">CTA</a></div>
      </div>
      <div class="getCustomer">
         <div class="container ourPartnerWrp">
         <h2>How Fixed Deposite Works</h2>
            <div class="row">
               <div class="col-lg-4 mb-lg-4">
                  <div class="ourPartner">
                   <h2>1</h2>
                     <h4>Step #1</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                     
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="ourPartner">
                   <h2>2</h2>
                     <h4>Step #2</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                    
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="ourPartner">
                   <h2>3</h2>
                     <h4>Step #3</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                     
                  </div>
               </div>
            </div>
            <div class="ctaBtnOur"><a href="#">Start Now</a></div>
         </div>
      </div>
      <div class="ourPartCaptital">
         <div class="container invest">
             <div class="row">
               <div class="col-lg-12">
                  <h2>Our Partners</h2>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>PNB Housing Finance Ltd.</h4>
                     <p>Know More About PNB Housing Finance Ltd.</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>HDFC Limited</h4>
                     <p>Know More About HDFC Limited</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>ICICI Home Finance Company Ltd</h4>
                     <p>Know More About ICICI Home Finance Company Ltd</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Shriram Transport Finance Limited</h4>
                     <p>Know More About Shriram Transport Finance Limited</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Bajaj Finance Limited</h4>
                     <p>Know More About Bajaj Finance Limited</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4 mb-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                      <h4>Mahindra Finance Limited</h4>
                     <p>Know More About Mahindra Finance Limited</p>
                 <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    <div class="landingPlatforms">
         <div class="container">
            <div class="row">
               <h2>How PMS works</h2>
               <p>Nulla vel nisl blandit nunc scelerisque consectetur id vitae nisi. In augue lectus, gravida a viverra et, imperdiet nec leo. Nulla vel nisl blandit nunc scelerisque consectetur id vitae nisi. In augue lectus, gravida a viverra et, imperdiet nec leo. Quisque feugiat eros sed<br/>
                  Nam in aliquet mi. Duis tempus ante turpis, et congue<br/>
               </p>
               <ol>
                  <li>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, nec pellentesque elit. Aenean dignissim, velit at tristique </li>
                  <li>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, nec pellentesque elit. Aenean dignissim, velit at tristique </li>
                  <li>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, nec pellentesque elit. Aenean dignissim, velit at tristique </li>
               </ol>
            </div>
         </div>
      </div>
      <div class="tabDiv">
         <div class="container invest">
            <div class="row">
               <div class="col-lg-12">
                  <h2>Lorem ipsum dolor sit </h2>
               </div>
               <ul class="nav-t nav-tabs">
                  <li class="active"><a href="#tab1">Lorem ipsum dolor</a></li>
                  <li><a href="#tab2">Lorem ipsum dolor</a></li>
                  <li><a href="#tab3">Lorem ipsum dolor</a></li>
               </ul>
               <div id="tab1" class="tab-content active">
               <p>1Cras ut mollis dolor. Phasellus sed commodo libero. Proin tincidunt lacus vel pharetra placerat. Nunc nec erat sagittis, laoreet velit a, euismod orci. Sed ut placerat ligula. Vestibulum pretium quam id tortor pharetra hendrerit sed nec dui. Sed sed tempus velit, eget commodo est. Nullam at fermentum tortor. Curabitur fermentum suscipit ligula at porta. Donec tincidunt dignissim fringilla.</p>
               
               <p>Nunc sollicitudin a diam quis molestie. Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.</p>
                  <p>Nunc sollicitudin a diam quis molestie. </p>
                  <p>Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.</p>
               </div>
               <div id="tab2" class="tab-content hide">
               <p>2Cras ut mollis dolor. Phasellus sed commodo libero. Proin tincidunt lacus vel pharetra placerat. Nunc nec erat sagittis, laoreet velit a, euismod orci. Sed ut placerat ligula. Vestibulum pretium quam id tortor pharetra hendrerit sed nec dui. Sed sed tempus velit, eget commodo est. Nullam at fermentum tortor. Curabitur fermentum suscipit ligula at porta. Donec tincidunt dignissim fringilla.</p>
                  <p>Nunc sollicitudin a diam quis molestie. Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.</p>
                 <p> Nunc sollicitudin a diam quis molestie. </p>
                  <p>Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.</p>
               </div>
               <div id="tab3" class="tab-content hide">
               <p>3Cras ut mollis dolor. Phasellus sed commodo libero. Proin tincidunt lacus vel pharetra placerat. Nunc nec erat sagittis, laoreet velit a, euismod orci. Sed ut placerat ligula. Vestibulum pretium quam id tortor pharetra hendrerit sed nec dui. Sed sed tempus velit, eget commodo est. Nullam at fermentum tortor. Curabitur fermentum suscipit ligula at porta. Donec tincidunt dignissim fringilla.</p>
<p>Nunc sollicitudin a diam quis molestie. Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.</p>
<p> Nunc sollicitudin a diam quis molestie. </p>
<p>Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.</p>
               </div>
            </div>
         </div>
      </div>
      <div class="getCustomer">
         <div class="container">
           <div class="row">
               <div class="col-lg-3">
                  <div class="customerDiv">
                     <p>11,000<br/>CUSTOMERS</p>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="customerDiv">
                     <p>1000+<br/>PARTENERS</p>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="customerDiv">
                     <p>400,000+<br/>TRANSACTIONS EXECUTED</p>
                  </div>
               </div>
               <div class="col-lg-3">
                  <div class="customerDiv">
                     <p>1,000+<br/>TOTAL TRANSACTION VALUE</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
      <div class="calCulator">
         <div class="container">
            <div class="row">
               <h2>FD calculator</h2>
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
                  <h3>1. What are Corporate Fixed Deposits?</h3>
                  <div>
                     <p>  
                     Corporate Fixed Deposits are the term deposits that can be held of a fixed tenure and fixed rate of interest. Corporate Fixed Deposits offer a high rate of interest as compared to bank FDs. Investing in the best fixed deposits schemes can achieve and recoup great benefits on your investment. 

                     </p>
                  </div>
                  <h3>2. Is it safe to invest in Corporate Fixed Deposits
                  </h3>
                  <div>
                     <p>  
                     Yes, it is safe to invest in Corporate Fixed Deposits. However, it is important to do research and associate with a reputed and reliable banking or non-banking financial institution for the best fixed deposit plans.

                     </p>
                  </div>
                  <h3>3. What is the interest rate for a fixed deposit?</h3>
                  <div>
                     <p>  
                     The interest rate for Corporate Fixed Deposits varies depending upon the financial institution. The best rates on Corporate Fixed Deposits in India can be as low as 6% to as high as 8% p.a. 
                     </p>
                  </div>
                  <h3>4. Is corporate FD taxable? </h3>
                  <div><p>  
                  Yes, Corporate Fixed Deposits are taxable only if the income from interest exceeds Rs. 5000. If the interest received is above 5000 then, the TDS rate is 10% (in case PAN details are provided) If PAN details are not provided , TDS deduction on FD interest is chargeable at 20%.</p>
                  </div>
                  <h3>5. What is the difference between a bank FD and a company FD?</h3>
                  <div> <p> 
                  Company FD has a low penalty on early period withdrawal as compared to bank FDs. Most importantly, the interest rate on corporate FD is higher than the bank FD.</p>
                  </div>
                  <h3>6. What are the different interest payment options of company FDs?</h3>
                  <p>The interest payout options on company FD are available in cumulative and non-cumulative formats. Under the cumulative option company, FD interest one receives interest at the end of the FD tenure. While, under non-cumulative FD interest one can opt for monthly, quarterly, half-yearly, or annual interest payouts. </p>

                  <h3>7. What is the minimum tenure for a company FD?</h3>
                  <p>The minimum tenure for a company FD as per the RBI guidelines is 3 months.</p>

                  <h3>8. How to apply for a company FD?</h3>
                  <p>ny investor can enjoy the benefits of investing through Nivesh in the following easy steps:
                     <ul>
                     <li>Create an account in Nivesh by providing your basic details. (If you already have an account then just login into your account)</li>
                     <li>On your portfolio page click on the Buy New tab at the right top corner of the screen.</li>
                     <li>Select the Corporate Fixed Deposit scheme you want to purchase.</li>
                     <li>Your request will be generated and a relationship manager will get in touch with you for getting the investment done.</li>
                     </ul>
</p>
                  
               </div>
            </div>
         </div>
      </div>
      </section>
        )
    }
}

export default fd
