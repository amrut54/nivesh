import React, { Component } from 'react'


export class api extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           items: [],
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
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.items
                })
            });
    }


    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
        return (
            <div>
                {items.map((item) => ( 
                <ul key = { item.ObejectResponse.SchemeDataList } >
                    <li>
                    First Year: { item.ObejectResponse.SchemeDataListSchemeName } 
                    </li>
                    </ul>
                ))}
            </div>
        )
    }
}

export default api
