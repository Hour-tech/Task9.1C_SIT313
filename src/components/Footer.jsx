import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer className="foot">
            <div className="container">
                <div className="row foot-head">
                    <div className="col-12 col-md-4 footer-column">
                        <ul>
                            <li><h4 className="f1-header">COFFEE</h4></li>
                            <li><a href="#coffeebean">Coffee Bean</a></li>
                            <li><a href="coffeetaste">Taste Of Coffee</a></li>
                            <li><a href="#coffeebar">Barista</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 footer-column">
                        <ul>
                            <li><h4 className="f4-header">About Us</h4></li>
                            <li><a href="contact">Contact</a></li>
                            <li><a href="faq">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 footer-column3">
                    <h4 className="f5-header">Share</h4>
                            <ul>
                                <li><a href="facebook"><i className="fab fa-facebook"></i></a></li>
                                <li><a href="instagram"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="tiktok"><i className="fab fa-tiktok"></i></a></li>
                                <li><a href="linkedin"><i className="fab fa-linkedin"></i></a></li>
                            </ul>
                    </div>
                </div>
                <div className="container footer-column4">
                    <div className="row">
                        <h4 className="col-lg-12 last-text">DEV@Deakin 2022</h4>
                            <ul>
                                <li><a href="policy">Privacy Policy</a></li>
                                <li><a href="terms">Terms</a></li>
                                <li><a href="code">Code of Conduct</a></li>
                            </ul>
                    </div> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;