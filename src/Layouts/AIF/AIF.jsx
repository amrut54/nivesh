import React, { Component } from 'react'
import bltimg from '../Home/images/Rectangle 2143.png'
import circle from "../Home/images/Ellipse 32.png"

export class AIF extends Component {
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
           ProductCategoryId: 5,
           ClientCode: "",
           LanguageId: 1,
           device: "" ,
           AMCCode: "" ,
           SebiCategoryId:"" ,
           SebiSubCategoryId:"" ,
           DefaultProductId: "1"
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
            if (!isLoaded) return null ;
                    return (
                              <main>
                                        <div class="fairaAssets"></div>
        
         <div class="container">
            <div class="row">
               <div class="col-lg-8">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Mutual funds invest in a variety of stock and debt options. These options come with varying terms and risks associated. By way of categorization rules set by SEBI, many mutual funds are bound to invest the bulk of their corpus in instruments as per the guidelines. For example, a Large-Cap equity fund will invest a majority of its corpus in Large-cap equities, the same is also followed for Debt funds.<br/><br/>
On the other hand, Alternative Investment Funds are defined as privately pooled investment funds investing in real estate, private equity, or hedge funds. Depending on the category of investment, they are categorized by SEBI as Category I AIF, Category II AIF, and Category III AIF.  Assets under management or investments can include start-ups, SME funds, infrastructure funds, private equity funds, or even hedge funds that may be trading in listed or unlisted derivatives depending on the type of fund. This gives an AIF considerable leverage to move as per favourable market scenarios to try to maximize returns. 
</p>
                  <div class="registerFair">
                     <a href="#" title="" class="startInvest">Start Investing</a>
                  </div>
               </div>
               <div class="col-lg-4"><img src={bltimg}/></div>
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
                  <h2>Features and Benefits of Alternative Investment Funds</h2>
                  <p>As the name suggests Alternative Investment Funds in India are non-traditional investments. This means the assets under such funds are not correlated to the stock market. These funds are primarily for high-net-worth investors looking for diversification and better potential returns while absorbing the accompanying risk. <br/><br/>
                  Some of the benefits and features of Alternative Investment Funds are:</p>
               </div>
                <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Individual Investment</h4>
                     <p>Diversification is one of the key features of these funds. They have considerable freedom to decide where to invest unlike most funds which are regulated by SEBI
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Minimizes Risk</h4>
                     <p>Non-traditional investment options are available to these funds which are not generally open to all investors. 
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Diversification</h4>
                     <p>Potential returns are a factor considering the type of non-traditional assets these funds invest in.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Higher Returns</h4>
                     <p>The minimum investment amount is INR 1 crore depending on the type of AIF
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Leverage</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Fund Manager</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               
               <div class="ctaBtn"><a href="#">CTA</a></div>
            </div>
         </div>
     
         <div class="ourPartCaptital aif">
            <div class="container invest">
               <div class="row">
                  <div class="col-lg-12">
                     <h2>Category 1</h2>
                  </div>
                  <div class="col-lg-4">
                     <div class="imgFeatures">
                        <img src={circle}/>
                        <h4>Venture Capital Fund</h4>
                        <p>Know More Venture Capital Fund</p>
                        <div class="moreLink"><a href="#">More</a></div>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <div class="imgFeatures">
                        <img src={circle}/>
                        <h4>SME Funds</h4>
                        <p>Know More About SME Funds</p>
                        <div class="moreLink"><a href="#">More</a></div>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <div class="imgFeatures">
                        <img src={circle}/>
                        <h4>Social Venture Funds</h4>
                        <p>Know More About Social Venture Funds</p>
                        <div class="moreLink"><a href="#">More</a></div>
                     </div>
                  </div>
                  <div class="col-lg-4">
                     <div className="cat-box">
                     <div class="imgFeatures">
                        <img src={circle}/>
                        <h4>Infrastructure Funds</h4>
                        <p>Know More About Infrastructure Funds</p>
                        <div class="moreLink"><a href="#">More</a></div>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
  
      <div class="ourPartCaptital aifcat2">
         <div class="container invest">
            <div class="row">
               <div class="col-lg-12">
                  <h2>Category 2</h2>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4> Real Estate Funds</h4>
                     <p>Know More About Real Estate Funds</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Private Equity Funds</h4>
                     <p>Know More About Private Equity Funds</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Funds for Distressed Assets</h4>
                     <p>Know More About Funds for Distressed Assets</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>

            </div>
         </div>
      </div>
     
      <div class="ourPartCaptital aif">
         <div class="container invest">
            <div class="row">
               <div class="col-lg-12">
                  <h2>Category 3</h2>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Hedge Funds</h4>
                     <p>Know More About  Hedge Funds</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Private Investments in Public Equity</h4>
                     <p>Know More About Private Investments in Public Equity</p>
                     <div class="moreLink"><a href="#">More</a></div>
                  </div>
               </div>
              
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
               <div id="tab1" class="tab-content active">1Cras ut mollis dolor. Phasellus sed commodo libero. Proin tincidunt lacus vel pharetra placerat. Nunc nec erat sagittis, laoreet velit a, euismod orci. Sed ut placerat ligula. Vestibulum pretium quam id tortor pharetra hendrerit sed nec dui. Sed sed tempus velit, eget commodo est. Nullam at fermentum tortor. Curabitur fermentum suscipit ligula at porta. Donec tincidunt dignissim fringilla.
                  Nunc sollicitudin a diam quis molestie. Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.
                  Nunc sollicitudin a diam quis molestie. 
                  Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.
               </div>
               <div id="tab2" class="tab-content hide">2Cras ut mollis dolor. Phasellus sed commodo libero. Proin tincidunt lacus vel pharetra placerat. Nunc nec erat sagittis, laoreet velit a, euismod orci. Sed ut placerat ligula. Vestibulum pretium quam id tortor pharetra hendrerit sed nec dui. Sed sed tempus velit, eget commodo est. Nullam at fermentum tortor. Curabitur fermentum suscipit ligula at porta. Donec tincidunt dignissim fringilla.
                  Nunc sollicitudin a diam quis molestie. Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.
                  Nunc sollicitudin a diam quis molestie. 
                  Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.
               </div>
               <div id="tab3" class="tab-content hide">3Cras ut mollis dolor. Phasellus sed commodo libero. Proin tincidunt lacus vel pharetra placerat. Nunc nec erat sagittis, laoreet velit a, euismod orci. Sed ut placerat ligula. Vestibulum pretium quam id tortor pharetra hendrerit sed nec dui. Sed sed tempus velit, eget commodo est. Nullam at fermentum tortor. Curabitur fermentum suscipit ligula at porta. Donec tincidunt dignissim fringilla.
                  Nunc sollicitudin a diam quis molestie. Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.
                  Nunc sollicitudin a diam quis molestie. 
                  Sed quis porta metus, id tristique mauris. Quisque a sem at felis suscipit vehicula sed quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam ultricies purus mauris, in auctor nisi ullamcorper ut. Quisque lobortis hendrerit elit rhoncus egestas. Praesent nec sapien arcu. Quisque et semper ex, vitae posuere urna.
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
   
      <div class="calCulator">
         <div class="container">
            <div class="row">
               <h2>AIF calculator</h2>
               <div class="col-lg-7">
                  <form>
                   
                     <div class="lftCal">
                        <div class="radioDiv">
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                              <label class="form-check-label" for="flexRadioDefault1">See Maturity Value </label>
                           </div>
                           
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked="" />
                              <label class="form-check-label" for="flexRadioDefault2">Build up to a goal</label>
                           </div>
                        </div>
                        <div class="form-group">
                           <label for="exampleFormControlFile1">Investment amount</label>
                           <input type="text" class="form-control-file" id="exampleFormControlFile1" name="" />
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
                        <div class="calCulatBtn"> <input type="submit" value="Calculate" /></div>
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
                  <h3>1. What are mutual funds and how do they work?</h3>
                  <div>
                     <p>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                        cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                        vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                     </p>
                  </div>
                  <h3>2. How to invest mutual funds? 
                  </h3>
                  <div>
                     <p>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                        cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                        vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                     </p>
                  </div>
                  <h3>3. How to choose a mutual fund that suits your financial objective?</h3>
                  <div>
                     <p>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                        cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                        vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                     </p>
                  </div>
                  <h3>4. How to Invest in Mutual funds on Nivesh ?</h3>
                  <div>  
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                     cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                     vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                  </div>
                  <h3>5. How are returns earned in mutual funds?</h3>
                  <div>  
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                     cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                     vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                  </div>
               </div>
            </div>
         </div>
         </div>


                              </main>
                    )
          }
}

export default AIF
