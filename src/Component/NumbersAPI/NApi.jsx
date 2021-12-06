import React, { Component } from 'react'
import axios from 'axios';

export class NApi extends Component {

    componentDidMount() {
        axios({
                method: 'post',
                url: 'https://www.nivesh.com/WebApi_UCC/Api/GetSummaryDetails',
                headers:{
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                    'Content-Type': 'application/json',
                    'token': '636F8F63-06C4-4D95-8562-392B34025FB0'

                },
                data: {
                    TotalClient: "22807",
        TotalPartner: "2348",
        TotalPartnerOverCities: "490",
        NoOfTransaction: "839627",
        TotalTransactionValue: "13736189855.0000"
                }
            })
            .then(res => this.setState({ recipes: res.data }));
    }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default NApi
