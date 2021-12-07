import React, { Component } from 'react'
import { Accordion } from 'react-bootstrap';
import mf1 from "../Home/images/3125760 1.png";
import Card from "../../Component/Card/card"

export class mutualfund extends Component {
   features = [
      {title:"Financial goal-", description:"here are various and different types of Mutual Fund schemes which can be selected based on your financial goals."},
      {title:"Diversification of portfolio:", description:"Spreading your investments over different asset classes is called diversification of the portfolio. It helps in minimising the risk factors associated with different investments."},
      {title:"Liquidity", description:"Purchasing Mutual Funds is a hassle-free task. Liquification of the best Mutual Funds is also quick as all the top Mutual Funds have instant redemption available and funds are available in T+2 days."},
      {title:"Return On Investment:", description:"For investors looking to beat inflation and increase their returns, investing in Mutual Funds is an advantageous option."},
      {title:"Risk:", description:"Mutual Funds are subject to market risks. That being said, Mutual Funds are handled by professional fund managers and they manage the monies invested in the best Mutual Funds. Fund managers are experts in their fields of investment which helps in reducing the risk associated with investments."},
      {title:"Easy Process:", description:"Investing in top-performing Mutual Funds is a simple process. It can be done online or offline. Most funds and distributors need only KYC documents and you can start investing."},
      {title:"Regulated:", description:"Securities and Exchange Board of India (SEBI) regulates the capital market. Mutual Funds also need to abide by the rules and regulations as laid down by SEBI."}

   ]
  


   constructor() {
      super()
  
      this.state = {
         items: [],
         MainTitle:[],
         isLoaded: false
      }
  }
        
  componentDidMount() {
      const url = 'https://nivesh.com/webapi_ucc/API/getSchemesDataV2';
      const postBody = {
           ProductCategoryId: 1,
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
           <section>
      
      
      <div class="container">
         <div class="row">
            <div class="col-lg-8">
               <h2>Best Mutual Funds in India</h2>
               <p>Saving for a financial future includes investing. Apart from bank fixed deposits and equities, Mutual Funds are considered to be one of the sought-after investment options. Before investing, understanding relevant performance factors will help you select the best Mutual Funds suited to you. </p><br/>

               <h2>What Are Mutual Funds? </h2>
               <ul>
                  <li>An investment tool, Mutual Funds are professionally managed investment schemes.</li>
                  <li>Run under SEBI guidelines where investors pool their resources to earn returns on the capital over a course of time.</li>
                  <li>The investment corpus is managed by a fund manager. </li>
               </ul>
            </div>
            <div class="col-lg-4"><img src={mf1}/></div>
         </div>
      </div>
      <div class="container midFundSec">
         <div class="row">
            <div class="col-lg-8">
               <h2>Top 10 Performing Mutual Funds </h2>
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


               <div  class="mutChilBtn"><a href="#" title="">View All Funds</a></div>
               <div class="whyInvest">
                  <h2>Where do Mutual Funds invest in? </h2>
                  <p>Top performing Mutual Funds invest in: </p>
                  <ul>
                     <li><b>Equities or stocks of various market capitalisation:</b> They invest in shares of listed companies. Wealth creation is the primary objective of these funds. Top performing Mutual Funds that invest in equity have a higher probability to generate high returns, especially for long-term investments. </li>
                     <li><b>Income Bonds or Fixed Income Funds:</b> They are suitable for income generation and are relatively safer investment tools. Debt market instruments like bonds, non-convertible debentures, commercial papers, gold, or other asset classes.</li>
                     <li><b>Tax Savings:</b> Equity Linked Savings Scheme invests in equity and equity-related securities. These types of Mutual Funds scheme have a lock-in period of 3 years and offer tax exemption under section 80C. </li>
                     
                  </ul>
               </div>
               <div  class="mutChilBtn"><a href="#" title="">Invest Now</a></div>
               <div class="clearDiv"></div>
               <div class="featursMidCap">
                  <h2>Features of Mid Cap Mutual Funds</h2>
                  {this.features && this.features.map(feature=>(
                     <Card title={feature.title} description={feature.description} />
                     
                     ))}
               </div>
            </div>
            
            <div class="col-lg-4">
               <div class="category-list calCulate">
                  <h3>Fund Categories</h3>
                  <h4>Equity</h4>
                  <div class="calculatorType">Multi Cap Fund</div>
                  <div class="calculatorType">Large Cap Fund</div>
                  <div class="calculatorType">Large And Mid Cap fund</div>
                  <div class="calculatorType">Small Cap Fund</div>
                  <div class="calculatorType">Dividend Yield Fund</div>
                  <h4>Debt</h4>
                  <div class="calculatorType">Multi Cap Fund</div>
                  <div class="calculatorType">Large Cap Fund</div>
                  <div class="calculatorType">Large And Mid Cap fund</div>
                  <div class="calculatorType">Small Cap Fund</div>
                  <div class="calculatorType">Dividend Yield Fund</div>
                  <h4>Hybrid</h4>
                  <div class="calculatorType">Multi Cap Fund</div>
                  <div class="calculatorType">Large Cap Fund</div>
                  <div class="calculatorType">Large And Mid Cap fund</div>
                  <div class="calculatorType">Small Cap Fund</div>
                  <div class="calculatorType">Dividend Yield Fund</div>
                  <h4>Solution Oriented</h4>
                  <div class="calculatorType">Multi Cap Fund</div>
                  <div class="calculatorType">Large Cap Fund</div>
                  <div class="calculatorType">Large And Mid Cap fund</div>
                  <div class="calculatorType">Small Cap Fund</div>
                  <div class="calculatorType">Dividend Yield Fund</div>
               </div>
            </div>
         </div>
      </div>
      <div class="getStarted">
         <div class="container">
            <div class="row">
               <div class="col-lg-5 getStartedBtn">
                  <h2>How to Invest in Mutual Funds:</h2>
                  
                  <div class="mutChilBtn"><a href="#" title="">Start Investing Now</a></div>
               </div>
               <div class="col-lg-7">
                  <div class="stepWrp">
                     <div class="stepLft"> Step #1:</div>
                     <div class="stepRgt"><b>Systematic Investment Plan:</b> Through a Systematic Investment Plan (SIP), investors can invest a fixed amount in any Mutual Fund of their choice at regular intervals. The amount can be as little as INR 500 per investment depending on the fund being chosen.<br/><br/>
                     SIP is suitable for investors looking to invest for a longer horizon of more than 7 years
                      </div>
                  </div>
                  <div class="stepWrp">
                     <div class="stepLft"> Step #2:</div>
                     <div class="stepRgt"><b>Lump-sum Investment:</b> Investors looking to invest a considerable portion of funds at one time can choose a lump sum investment route. <br/><br/>
                     Lump-sum investments should be ideally done when the markets have already taken a nosedive and are showing signs of recovery. 
                       </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="landingPlatforms">
         <div class="container">
            <div class="row">
               <h2>When Should You Invest In Mutual Funds?</h2>
               <p>Money when kept stagnant can loose value. Inflation is a constant in everyday life. This means the value of money decreases with time as the cost of goods and services increases. It is thus prudent to have an investment option that gives an inflation-adjusted return on your money. <br/><br/>
Bank deposits are considered to have a high degree of safety but post adjusting for inflation their returns tend to be lower than Mutual Funds. Thus, anyone looking for returns that are better adjusted to inflation should consider investing in the top Mutual Funds. This also means that investors will have to take on additional risks as compared to bank deposits. 

               </p>
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

      <div class="container testimonials">
         <div class="row">
            <div class="col-lg-12">
               <h2>Frequently Asked Questions</h2>
               <div id="accordion">
                  <h3>1. WWhat are Mutual Funds and how do they Work?</h3>
                  <div>
                     <p>  
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                        cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                        vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                     </p>
                  </div>
                  <h3>How to choose a suitable Mutual Fund? 
                  </h3>
                  <div>
                     <p>  
                     Your choice of Mutual Funds should depend on your investment goals, the investment horizon, your risk appetite, and the returns expected. 
                     </p>
                  </div>
                  <h3>3. When Should You Invest in Mutual Funds?</h3>
                  <div>
                     <p>  
                     Anytime you wish to start an investment is ideally the best time. In case one is unsure, consulting a financial advisor would be helpful before starting.
                     </p>
                  </div>
                  <h3>4. What is Net Asset Value of Mutual Funds</h3>
                  <div>  
                     <p>The Net Asset Value of Mutual Funds is the fund’s assets less its liabilities per unit divided by number of shares outstanding
                     NAV is the market value of the assets or securities held by the scheme. 
                     </p>
                  </div>
                  <h3>5. How to Invest Mutual Funds on NIVESH?</h3>
                  <div>  
                     <p>Any investor can enjoy the benefits of investing through Nivesh in the following easy steps:</p>
                     <ul>
                        <li>Create an account in Nivesh by providing your basic KYC details. (If you already have an account then just login into your account)</li>
                        <li>On your portfolio page click on the Buy New tab at the right top corner of the screen.</li>
                        <li>Select the category and choose the funds you want to purchase.</li>
                        <li>If you already know the name of the fund to buy, then you can search the particular fund through Quick Order.</li>
                        <li>Fill the transaction details and confirm. You can place up to 5 orders in one go.</li>
                        <li>You can make payment through your registered account through UPI, Direct Pay, or NEFT/ RTGS , Bank Mandate or Cheque. For same-day NAV, select UPI, Direct Pay or NEFT / RTGS as other payment options may take a few days to clear, Nodal account takes about 1-2 days to clear payment from the approved mandate and cheque takes about 2-5 days in clearing due to which you will not get the same-day NAV.</li>
                     </ul>
                  </div>
                  <div>
                  <h3>6. How much time is taken for Mutual Funds Investment through NIVESH?</h3>
                  <p>In case investors Mutual Fund KYC is complete, it take about 5-10 minutes for 1st transaction and later the subsequent transactions can be done in less than a minute And, in case Mutual Fund KYC is not complete than process will take little more longer time, investor will have to complete KYC first from our portal and it takes about 24-48 hours to the KYC to be approved and once KYC is complete transactions can be done in less than a minute time,</p>
                  </div>
                  <div>
                     <h3>7. What is the Commission Charged by Nivesh on MF Investments?</h3>
                     <p>We don't charge any commission for MF investments through our portal.</p>
                  </div>

               </div>
            </div>
         </div>
      </div>

      
           </section>
        )
    }
}

export default mutualfund
