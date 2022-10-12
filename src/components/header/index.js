// import React, {useState} from React ;
import React from 'react';
import './style.css' ;
import Logo from '../../assets/img/logo.svg';
import Burgermenu from './assets/burgermenu.svg';
import Logosidebar from './assets/BCR.svg'
import Closesidebar from './assets/Close.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
  
    const openSidebar =() => {
        alert("berhasil")    
        console.log("diklik")
  } ;
  
  return (
    <header>
        <div className="container">
            <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ataskiri">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="Binar Car Rental" title='BCR - Home'/>
                            </Link>
                        </div>
                        <div className="burger" onClick={openSidebar}>
                            <img src={Burgermenu} alt=""/>
                        </div>
                    </div>


                {/* ! pembatas */}
    

                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ataskanan">
                        <div className="sidebar">
                            <div className="top-sidebar">
                                <div className="logosidebar">
                                <img src={Logosidebar} alt="" />   
                                </div>
                                <div className="closesidebar">
                                <img src={Closesidebar} alt="" />   
                                </div>
                            </div>
                        <ul className='menu'>
                            <li><a href="#our-services" >Our Services</a></li>
                            <li><a href="#why-us" >Why Us</a></li>
                            <li><a href="#testi-monial" >Testimonial</a></li>
                            <li><a href="#f-a-q" >FAQ</a></li>
                        </ul>
                        </div>                     
                    </div>
                </div>
                  
        </div>
    </header>
  )
}

export default Header



