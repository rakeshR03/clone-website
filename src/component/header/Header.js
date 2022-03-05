import React from 'react';
import './header.css';
import fieldEdge from '../../Asset/Field.png';

export default function Header(){
    return(
        <div className='header-container'>
            <div className='logo-container'>
                <a href="https://fieldedge.com/">
                    <img id="logo" src={fieldEdge} alt="logo"/>
                </a>
            </div>
            <div className="menu-container">
                <div className='products-container'>
                    <div class="dropdown">
                        <button class="dropbtn">Products</button>
                        <div class="dropdown-content">
                            <a href="#">FieldEdge Software</a>
                            <a href="#">FieldEdge Payments</a>
                            <a href="#">FieldEdge Flat Rate</a>
                            <a href="#">ESC Software</a>
                        </div>
                    </div>
                </div>
                <div className='menu industries-container'>
                    <div class="dropdown">
                        <button class="dropbtn">Industries</button>
                        <div class="dropdown-content">
                            <a href="#">HVAC Software</a>
                            <a href="#">Plumbing Software</a>
                            <a href="#">Electrician Software</a>
                            <a href="#">Locksmith Software</a>
                            <a href="#">Appliance Repair Software</a>
                        </div>
                    </div>    
                </div>
                <div className='menu resources-container'>
                    <div class="dropdown">
                        <button class="dropbtn">Resources</button>
                        <div class="dropdown-content">
                            <a href="#">Blog</a>
                            <a href="#">News</a>
                            <a href="#">FieldEdge Academy</a>
                        </div>
                    </div>
                </div>
                <div className='menu partners-container'>
                    <a href="#"><button class="dropbtn">Partners</button>
                    </a>  
                </div>
                <div className='menu call-container'>
                    <button class="dropbtn" onClick={() => {window.alert("https://fieldedge.com wants to open this application.")}}><span id="call-spec">800.226.7529 <em>call</em></span></button>
                     
                </div>
                <div className='menu button-container'>
                    <button id="btn-con" >Request Demo</button>
                </div>
            </div>    
        </div>
    );
}