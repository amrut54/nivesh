import React, { Component } from 'react'
import './api.css'
import { Link } from 'react-router-dom'


export class api extends Component {

    constructor() {
        super()
    
        this.state = {
           items: [],
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
            this.setState({isLoaded:true, items:data.ObjectResponse.SchemeDataList});
            });
    }


    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) return <div>
            <h1> API is Loading </h1> </div> ;
        return (
            <div className="api">
                <h2>Recommended Funds Table  </h2>
                {items && items.map((item) => (

                <div>
                  
                <table class="table api-table">
                    <thead class="thead-blue">
                     <tr>
                       <th colspan="4">{item.SchemeName}
                       <a href={"https://www.nivesh.com//WebApp/Home/Index?AMCCode=" .concat(item.AMCCode)}target="_blank" class="api-button">Invest Now</a></th>
                   
                        
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
                    <td>${item.FourYearInterest}%</td>
                </tr>
            </table>
            </div>
                ))}
            </div>
        )
    }
}

export default api
