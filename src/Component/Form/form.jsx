import React, { useState } from 'react';
import './form.css';
import Axios from 'axios';

function Form() {

    const [data, setData] = useState({
        Name: "",
        Email: "",
        Phone: "",
        Holder:""
      });
    
      const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
    
      function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        console.log(query)//"this should be everything after the ?"
        var vars = query.split("&");
        console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i = 0; i < vars.length; i++) {
          var pair = vars[i].split("=");
          console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
          if (pair[0] == variable) { return pair[1]; }
        }
    
        return (false);
      }
    

      function submit(e) {
        e.preventDefault();
        const url = `https://www.nivesh.com/WebAPI/API/WebAddLead`;
    
        const payload = {
          Name: data.Name,
          PhoneNo: data.Phone,
          Email: data.Email,
          Message: data.Holder,
          IsDistributor: 0,
          TypeRequest: `SamaveshClientLead|${getQueryVariable('utm_campaign')}|${getQueryVariable('utm_content')}|${getQueryVariable('utm_medium')}|${getQueryVariable('utm_source')}`
        };
    
        const headers = {
          headers: { 'Content-Type': 'application/json' }
        };
    
        Axios.post(url, payload, headers)
          .then(res => {
            setIsSubmitSuccess(true)
          });
      }
    
      const handle = (e) => {
        const userInput = { ...data }
        userInput[e.target.id] = e.target.value
        setData(userInput);
      }
    
  

  return (
           <div class="col-lg-4 clo-md-6 col-12">
             <div class="formKnow">
                    <h3>Fill the Form to Know More!</h3>
                    {!isSubmitSuccess && <form onSubmit={(e) => submit(e)}>
                   <div class="form-group">   
                      <input onChange={(e) => handle(e)} type="text" class="form-control" id="Name" value={data.Name} placeholder="Enter Full Name " />
                   </div>
               <div class="form-group">   
                   <input onChange={(e) => handle(e)} type="email" class="form-control" id="Email" value={data.Email} placeholder="Enter Email ID" />
               </div>
               <div class="form-group">    
                    <input onChange={(e) => handle(e)} type="text" class="form-control" id="Phone" value={data.Phone} placeholder="Enter Mobile Number" />
               </div>
               <div class="radioKonw">
                   <span>Currently, you are an</span>
                     <div class="form-check">
                        <input onChange={(e) => handle(e)} class="form-check-input" type="radio" name="flexRadioDefault" id="Holder" value="ARN Holder"  />
                        <label  class="form-check-label" for="Holder">
                           ARN Holder
                        </label>
                     </div>
                     <div class="form-check">
                        <input onChange={(e) => handle(e)} class="form-check-input" type="radio" name="flexRadioDefault" id="Holder" value="NON ARN Holder" />
                        <label class="form-check-label" for="Holder" >
                           NON ARN Holder
                        </label>
                     </div>
                  
               </div>
               <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check1-label" for="flexCheckDefault">
                       I would like to get information on products, investment options via WhatsApp, Email, SMS, phone from Nivesh.com.      
                    </label>
               </div>
          <button type="submit" class="btn btn-primary">I would Like To Know More</button>
       </form>}

       {isSubmitSuccess &&<div><p>Your form is successfully submitted. Our representative will get in touch with you shortly.</p></div> }
    </div>
 </div>
  );
}

export default Form;
