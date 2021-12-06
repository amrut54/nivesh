import React, { useState } from 'react';
import './contactus.css';
import Axios from 'axios';
function ContactUs() {

  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message:""
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
      Name: data.fullName,
      PhoneNo: data.phone,
      Email: data.email,
      Message: data.message,
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
    <section>
      <div id="contact-banner">
        <div className="container">
          <div className="contact-head">
            <h2 className="contact-heading">Let's Get In Touch</h2>
            <p>Here are the ways you can contact us with any questions you have</p>
            {/*
                                                 <button id="contact-becomeposp" type="button" name="button">Become POSP</button>
                                                 <button id="contact-enquiry" type="button" name="button">Enquiry</button> */}
          </div>

        </div>
      </div>
      <div id="conatct-formsection">
        <div className="container">
          <div className="contact-flex">
            <div className="form-flex1">
              <div class="contactform-flex">
                
                {!isSubmitSuccess && <form action="" onSubmit={(e) => submit(e)}>
                <h2 className="form-heading">Send Us Message</h2>
                  <div class="conatactform">
                    <label htmlFor="form_name1">Full Name</label>
                    <input onChange={(e) => handle(e)} class="form_name1" type="text" id="fullName" name="fullName" required />

                    <label htmlFor="form_email1">Email Address</label>
                    <input onChange={(e) => handle(e)} class="form_email1" id="email" type="email" name="email" required />

                    <label htmlFor="form_phone1">Phone Number</label>
                    <input onChange={(e) => handle(e)} class="form_phone1" id="phone" type="tel" name="phone" required />

                    <label htmlFor="form_emessage">Message</label>
                    <textarea onChange={(e) => handle(e)} class="form_message" id="message" name="message" required rows="5"></textarea>
                    <button id="form_button1">Submit</button>

                    
                  </div>
                </form>}
                {isSubmitSuccess && <div className="form_success"><p>Your form is successfully submitted. Our representative will get in touch with you shortly.</p></div>}
              </div>
              <div className="contact-information">
                <h2 className="form-heading1">Contact Information</h2>
                <ul>
                  <li className="contact-iconflex">
                    <span><i class="fa fa-map-marker"></i></span>
                    <span><p>Tower : Unit no. 1104, 11th floor, Logix City Centre, Plot No BW58, Sector 32,</p></span>
                  </li>
                  <li className="contact-iconflex">
                    <span><i class="fa fa-map-marker"></i></span>
                    <span><p>City : Noida 201301 UP India </p></span>
                  </li>

                  <li className="contact-iconflex">
                    <span><i class="fa fa-phone"></i></span>
                    <span><p>+91 7290001682</p></span>
                  </li>
                  <li className="contact-iconflex">
                    <span><i class="fa fa-envelope-o"></i></span>
                    <span><p>contact@nivesh.com</p></span>
                  </li>
                  <li className="contact-iconflex">
                    <span><i class="fa fa-envelope-o"></i></span>
                    <span><p>Monday - Friday</p></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;