import React, { Component } from 'react'

export class card extends Component {

    render() {
        
        return (
            <div class="featureMidCapDiv">
                     <div class="iconMidCap">
                        <img src="assets/images/icon_returns.png" alt=""/>
                     </div>
                     <div class="cntMidCap">
                        <h3>{this.props.title}</h3>
                     </div>
                     <div class="clearDiv"></div>
                     <p>{this.props.description}</p>
                  </div>
        )
    }
}

export default card
