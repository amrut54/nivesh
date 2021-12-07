import React, { Component } from 'react'
import circle from "../Home/images/Ellipse 32.png"
import bltimg from '../Home/images/Rectangle 2143.png'

export class CB extends Component {
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
           ProductCategoryId: 7,
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
            if (!isLoaded) return <div>
                <h1> API is Loading </h1> </div> ;
                    return (
                              <main>
                                        <div class="fairaAssets"></div>

         <div class="container">
            <div class="row">
               <div class="col-lg-8">
                  <h2>Lorem ipsum dolor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan cursus. Fusce eu porttitor orci, vel interdumLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean accumsan cursus. Fusce eu porttitor orci, vel interdum</p>
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
                  <h2>Features and Benefits</h2>
                  <p>Nam in aliquet mi. Duis tempus ante turpis, et congue ante consequat ac. Mauris in ornare diam, </p>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Individual Investment</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Minimizes Risk</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Diversification</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
                     </p>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="imgFeatures">
                     <img src={circle}/>
                     <h4>Higher Returns</h4>
                     <p>Nemo enim ipsam voluptatem 
                        quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia.
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
      <h2>Corporate Bond calculator</h2>
         <div class="row">
            <div class="col-lg-12">
               <div class="lftCal bondCal">
                  <form>
                     <div class="form-group">
                        <label for="exampleInputEmail1">Current Price</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Par value</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Par value" />
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Coupon Rate</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Coupon Rate" />
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Years to Maturity</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                     </div>
                     <button type="submit" class="btn btn-primary">Calculate</button>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Current Yield  </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Current Yield" />
                     </div>
                     <div class="form-group">
                        <label for="exampleInputPassword1">Yield to Maturity</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Yield to Maturity" />
                     </div>
                  </form>
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
                     <p>  
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                     cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                     vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                     </p>
                  </div>
                  <h3>5. How are returns earned in mutual funds?</h3>
                  <div> 
                     <p> 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius 
                     cursus. Fusce eu porttitor orci, vel interdum urna. Donec lorem arcu, 
                     vitae lectus. Vestibulum libero tellus, facilisis id turpis vel, pharetra imperdiet ante. ,
                     </p>
                  </div>
               </div>
            </div>
         </div>
        
      </div>
  </main>
                    );
          }
}

export default CB
