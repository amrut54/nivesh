import React from "react";
import Home from "./Layouts/Home/Home";
import { Switch, Route } from "react-router-dom";
import AboutUs from "./Layouts/AboutUs/About.jsx";
import ARN from "./Layouts/ARN/ARN.jsx";
import Retirement from "./Layouts/PlansForRetirement/Retirement.jsx";
import BLT from "./Layouts/Building-Long-Terms/BLT.jsx"
import SaveTax from "./Layouts/SaveTax/savetax"
import SFC from "./Layouts/Save-For-Children/SFC"
import Grow from "./Layouts/Grow-Your-Mutual/Grow"
import BMF from "./Layouts/Become-Mutual-Fund/BMF"
import CB from "./Layouts/Corporate-Bond/CB"
import AIF from  "./Layouts/AIF/AIF"
import NPS from "./Layouts/NPS/NPS"
import Contact from "./Layouts/ContactUs/contactus"
import MutualFund from "./Layouts/MutualFund/mutualfund"
import FD from "./Layouts/FD/fd"
import P2P from "./Layouts/P2PLoan/p2loan"
import Bond from "./Layouts/Capital Gain Bond/capitalbond"
import PMS from "./Layouts/PMS/pms"
class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/contactus" component={Contact} />
        <Route exact path="/arn" component={ARN} />
        <Route exact path="/retirement" component={Retirement} />
        <Route exact path="/building-long-terms" component={BLT} />
        <Route exact path="/savetax" component={SaveTax} />
        <Route exact path="/save-for-children" component={SFC} />
        <Route exact path="/grow-your-mutual-fund" component={Grow} />
        <Route exact path="/become-mutual-fund-distributor" component={BMF} />
        <Route exact path="/mutual-fund" component={MutualFund} />
        <Route exact path="/corporate-bonds" component={CB} />
        <Route exact path="/aif" component={AIF} />
        <Route exact path="/nps" component={NPS} />
        <Route exact path="/fixed-deposit" component={FD} />
        <Route exact path="/p2p-loan" component={P2P} />
        <Route exact path="/capital-gain-bond" component={Bond} />
        <Route exact path="/pms" component={PMS} />

      </Switch>
    );
  }
}

export default App;
