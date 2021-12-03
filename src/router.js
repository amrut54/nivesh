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
class App extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/other" component={Home} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/arn" component={ARN} />
        <Route exact path="/retirement" component={Retirement} />
        <Route exact path="/building-long-terms" component={BLT} />
        <Route exact path="/savetax" component={SaveTax} />
        <Route exact path="/save-for-children" component={SFC} />
        <Route exact path="/grow-your-mutual-fund" component={Grow} />
        <Route exact path="/become-mutual-fund-distributor" component={BMF} />
        <Route exact path="/corporate-bonds" component={CB} />
        <Route exact path="/aif" component={AIF} />
        <Route exact path="/nps" component={NPS} />
      </Switch>
    );
  }
}

export default App;
