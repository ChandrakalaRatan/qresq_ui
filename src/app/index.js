import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { browserHistory} from "react-router";


import { Root } from "./Root";

import { Home } from "./Containers/Home/Home";
import { AboutUs } from "./Containers/AboutUs/AboutUs";
import { OurTechnology } from "./Containers/OurTechnology/OurTechnology";

import { OurProduct } from "./Containers/OurProducts/OurProduct";
import { ResqHome } from "./Containers/OurProducts/ResqHome";

import { Contact } from "./Containers/Contact/Contact";
import { DataPolicy } from "./Containers/DataPolicy/DataPolicy";

import { SpecificDisasterDetailMap } from "./Containers/OurProducts/SpecificDisasterDetailMap";

import {SocialMediaSector} from './Containers/OurProducts/SocialMediaSector';
import {SatelliteImageAnalysis} from './Containers/OurProducts/SatelliteImageAnalysis';

class App extends React.Component {
    render(){
        return (
            <Router history={browserHistory} >
            <Root>
                <Route path={"/home"} component={Home}/>
                <Route path={"/ourtechnology"} component={OurTechnology}/>
                <Route path={"/aboutus"} component={AboutUs}/>
               
                {/* <Route path={"/ourproducts"} component={OurProduct}/> */}
                <Route path={"/resqhome"} component={ResqHome}/>
                <Route path={"/disasterdetail"} component={SpecificDisasterDetailMap}/>

                <Route path={"/socialmedia"} component={SocialMediaSector}/>
                <Route path={"/satelliteimage"} component={SatelliteImageAnalysis}/>
            
                <Route path={"/contact"} component={Contact}/>
                <Route path={"/datapolicy"} component={DataPolicy}/>
            </Root>
            </Router>
        );
    }
}

render(<App/>,window.document.getElementById('app'));