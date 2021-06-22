import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import classes from "./Footer.module.css";

const arrowUp = <FontAwesomeIcon icon={faArrowUp} color="#FFFFFF" />
const location = <FontAwesomeIcon icon={faMapMarkerAlt} color="#C9A75C" />
const phone = <FontAwesomeIcon icon={faPhoneAlt} color="#C9A75C" />
const email = <FontAwesomeIcon icon={faEnvelope} color="#C9A75C" />

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.col1}>
                    <div className={classes.head}><h1>About & <strong>Locations</strong></h1></div>
                    <div style={{ display: "flex", margin: "0.875rem 0 2.5rem" }}>
                        <div style={{ width: "2.063rem", borderTop: "2px solid #C9A75C" }}></div>
                        <div style={{ width: "5.375rem", borderTop: "1px solid #FFFFFF", marginTop: "0.5px" }}></div>
                    </div>
                    <p
                        style={{ lineHeight: "1.65rem", padding: " 0 0 0.813rem " }}>
                        Dignissimos commodi amet nisi animi egestas cupidatat ntium minus ullam facere.
                    </p>
                    <h3><span style={{ marginRight: "9.6px" }}>{location}</span>Location</h3>
                    <p style={{ padding: "0.063rem 0" }}>Viva business Co,.Ltd</p>
                    <h2><span style={{ marginRight: "16.1px" }}>{phone}</span>+940-99382290</h2>
                    <a href="/"><span style={{ marginRight: "19.2px" }}>{email}</span>info@siamsmile.com</a>
                </div>
                <div className={classes.col2}>
                    <div className={classes.head}><h1>Our Store <span>Location</span></h1></div>
                    <div style={{ display: "flex", margin: "0.875rem 0 2.5rem" }}>
                        <div style={{ width: "2.063rem", borderTop: "2px solid #C9A75C" }}></div>
                        <div style={{ width: "5.375rem", borderTop: "1px solid #FFFFFF", marginTop: "0.5px" }}></div>
                    </div>
                    <p>New York</p>
                    <p>London</p>
                    <p>Los Angeles</p>
                    <p>Chicago</p>
                    <p>Las Vegas</p>
                    <p>California</p>
                    <button style={{ marginRight: "13px" }}><img src="/images/Footer/appstore.png" alt="appstore" /></button>
                    <button><img src="/images/Footer/playstore.png" alt="playstore" /></button>
                </div>
                <div className={classes.col3}>
                    <div className={classes.head}><h1>Social <span>Contact</span></h1></div>
                    <div style={{ display: "flex", margin: "0.875rem 0 2.5rem" }}>
                        <div style={{ width: "2.063rem", borderTop: "2px solid #C9A75C" }}></div>
                        <div style={{ width: "5.375rem", borderTop: "1px solid #FFFFFF", marginTop: "0.5px" }}></div>
                    </div>
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Twitter</a>
                    <a href="/">Dribbble</a>
                    <a href="/">Pinterest</a>
                    <a href="/">Linkedin</a>
                </div>
                <div className={classes.col4}>
                    <div className={classes.head}><h1>Useful <span>Link</span></h1></div>
                    <div style={{ display: "flex", margin: "0.875rem 0 2.5rem" }}>
                        <div style={{ width: "2.063rem", borderTop: "2px solid #C9A75C" }}></div>
                        <div style={{ width: "5.375rem", borderTop: "1px solid #FFFFFF", marginTop: "0.5px" }}></div>
                    </div>
                    <a href="/">About Us</a>
                    <a href="/">Term of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Promotion</a>
                    <a href="/">Return</a>
                    <a href="/">Shipping</a>
                    <a href="/">My Account</a>
                    <a href="/">Track Your Order</a>
                </div>
            </div>
            <div className={classes.footbtnContainer}>
                <div className={classes.footbtn}>
                    <p>All right reserved @CopyRight & designed by Siamsmile</p>
                    <button><div>{arrowUp}</div></button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;