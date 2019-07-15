import React from 'react';

import './Toolbar.css';


const toolbar = props => ( 
    <header className="toolbar">
      <nav className="toolbar__navigation"> 
            <div className="toolbar__logo">
                <a href='/'>
                    <div className="toolbar__logo_img">   
                        <img src={"http://localhost:8080/Images/qresqlogo.png"} 
                        align="bottom" width="40" height="50"/>
                    </div> 
                    <div className="toolbar__logo_label-div"> 
                        <label className="toolbar__logo_label">resQ</label>
                    </div> 
                </a>
            </div>
            <div className="spacer"></div>
            <div className="toolbar__navigation-items"> 
                <ul>
                    <li><a href ={"/home"} > Home</a></li>
                    <li><a href ={"/ourtechnology"} > Our Technology</a></li>
                    <li><a href ={"/aboutus"}> About Us</a></li>
                    {/* <li><a href ={"/ourproducts"}> Our Products</a></li> */}
                    <li><a href ={"/resqhome"}> Our Products</a></li>
                    <li><a href ={"/contact"}> Contact</a></li>
                    <li><a href ={"/datapolicy"}> Data Policy</a></li>
                </ul>
             </div>
        </nav> 
    </header>
);
export default toolbar;