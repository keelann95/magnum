/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { IoStorefrontOutline } from "react-icons/io5";
import { RiTwitterLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoShieldCheckmarkSharp } from "react-icons/io5";



import '../About.css'
import Footer from "./Footer";


const About = () => {
  return (
    <>
     <div className="about-container">
        
        <p className="about-header">
            <span className='first-part'>Home </span>/ <span className='second-part'>About</span>
        </p>
        <div className="information-container">
            <div>
            <h1 className='info-header'>Our Story</h1>
            <p className="info-text">
                Launched in 2015, Exclusive is South Asia`s premier online shopping marketplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and services solutions, Exclusive has 10,500 sellers and 300 brands and serves millions customers across the region. 
            </p>
            <p className="additional-info">
                Exclusive has more than i Million products to offer, growing at a very fast. Exclusive offers a diverse assessment in categories for our consumers
            </p>
            </div>
            <div className="img-container">
                <img src="https://plus.unsplash.com/premium_photo-1683120690591-71680296eedc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="A happy customer" />
            </div>
        </div>
        <div className="more-info">
        <div className="outside">
            <div className="img">
            <IoStorefrontOutline  className="store-icon"/>
            </div>
            <p className="amount">10.5k</p>
            <p className="amount-info">Sellers active at our site</p>
        </div>
        <div className="outside">
            <div className="img">
            <IoStorefrontOutline  className="store-icon"/>
            </div>
            <p className="amount">33k</p>
            <p className="amount-info">Monthly Product Sale</p>
        </div>
        <div className="outside">
            <div className="img">
            <IoStorefrontOutline  className="store-icon"/>
            </div>
            <p className="amount">45.5k</p>
            <p className="amount-info">Customer active in our site</p>
        </div>
        <div className="outside">
            <div className="img">
            <IoStorefrontOutline  className="store-icon"/>
            </div>
            <p className="amount">25k</p>
            <p className="amount-info">Annual gross sale in our site</p>
        </div>
     </div>
        <div className="staff">
            <div className="staff-container">
                <div className="staff-img">
                    <img className="staff-pic" src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvcnByYXRlJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="The Founder" />
                </div>
                <div className="staff-info">
                    <p className="name">Tom Cruise</p>
                    <p className="rank">Founder & Chairman</p>
                    <div className="staff-socials">
                    <RiTwitterLine className="icon"/>
                    <FaInstagram className="icon"/>
                    <RiLinkedinLine className="icon"/>
                    </div>
                </div>
            </div>
            <div className="staff-container">
                <div className="staff-img">
                    <img className="staff-pic" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnByYXRlJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="The Managing Director" />
                </div>
                <div className="staff-info">
                    <p className="name">Emma Watson</p>
                    <p className="rank">Managing Director</p>
                    <div className="staff-socials">
                    <RiTwitterLine className="icon"/>
                    <FaInstagram className="icon"/>
                    <RiLinkedinLine className="icon"/>
                    </div>
                </div>
            </div>
            <div className="staff-container">
                <div className="staff-img">
                    <img className="staff-pic" src="https://media.istockphoto.com/id/1629541271/photo/smile-arms-crossed-and-portrait-of-a-woman-at-work-for-business-pride-and-corporate.webp?b=1&s=612x612&w=0&k=20&c=H3K1xie1MRc83SXZoaZBKi2Dyy8vAkLMpzWqLxSlVMg=" alt="The Product Designer" />
                </div>
                <div className="staff-info">
                    <p className="name">Will Smith</p>
                    <p className="rank">Product Designer</p>
                    <div className="staff-socials">
                    <RiTwitterLine className="icon"/>
                    <FaInstagram className="icon"/>
                    <RiLinkedinLine className="icon"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="services">
            <div className="services-container">
                <div className="last-img">
                <TbTruckDelivery className="store-icon"/>
                </div>
                <div className="service-info">
                    <p className="free">FREE AND FAST DELIVERY</p>
                    <p className="delivery">Free delivery for all orders over $140</p>
                </div>
            </div>
            <div className="services-container">
                <div className="last-img">
                <RiCustomerService2Fill className="store-icon"/>
                </div>
                <div className="service-info">
                    <p className="free">24/7 CUSTOMER SERVICE</p>
                    <p className="delivery">Friendly 24/7 customer support</p>
                </div>
            </div>
            <div className="services-container">
                <div className="last-img">
                <IoShieldCheckmarkSharp className="store-icon"/>
                </div>
                <div className="service-info">
                    <p className="free">MONEY BACK GUARANTEE</p>
                    <p className="delivery">We return money within 30 days</p>
                </div>
            </div>
        </div>
     </div>
     <Footer />
    </>
  )
}

export default About