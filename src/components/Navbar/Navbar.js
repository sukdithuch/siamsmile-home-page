import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faBars, faHeadphones, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import classes from "./Navbar.module.css";

const shippingFast = <FontAwesomeIcon icon={faShippingFast} color="#5CC9A3" />;
const bars = <FontAwesomeIcon icon={faBars} color="#5CC9A3" />;
const headphones = <FontAwesomeIcon icon={faHeadphones} color="#5CC9A3" />;
const search = <FontAwesomeIcon icon={faSearch} color="#828282" />;
const shoppingCart = <FontAwesomeIcon icon={faShoppingCart} color="#828282" />;


const Navbar = (props) => {

    const { countCartItems } = props;

    const [showMenuBar, setShowMenuBar] = useState(false);
    console.log(showMenuBar);

    const handleBar = () => {
        setShowMenuBar(!showMenuBar);
        console.log(showMenuBar);
    }

    return (
        <header className={showMenuBar ? classes.showHeader : classes.header}>
            <div className={classes.navContainer}>
                <div className={classes.nav}>
                    <p>{shippingFast} &nbsp; Free shipping for ordering up to $230</p>
                    <nav style={{ marginRight: "-16px" }}>
                        <ul>
                            <li>
                                <a href="/">About</a>
                            </li>
                            <li>
                                <a href="/">Newsletter</a>
                            </li>
                            <li>
                                <a href="/">FAQS</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={classes.navMainContainer}>
                <div className={classes.navMain}>
                    <div className={classes.iconBar}>
                        <button onClick={handleBar}>{bars}</button>
                    </div>
                    <nav className={classes.menu}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Shop</a>
                            </li>
                            <li>
                                <a href="/">Products</a>
                            </li>
                            <li>
                                <a href="/">Pages</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.logo}>
                        <a href="/"><img src="/images/Logo/LOGO-Sm.png" alt="logo" /></a>
                    </div>
                    <nav className={classes.menuCall}>
                        <ul>
                            <li>
                                <a href="/">{headphones} &nbsp; Call us: 02-12345678</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className={classes.menuRight}>
                        <ul>
                            <li>
                                <a href="/">Login</a>
                            </li>
                            <li>
                                <button>{search}</button>
                            </li>
                            <span>|</span>
                            <li>
                                <button>{shoppingCart}</button>
                                {countCartItems ? (
                                    <button
                                        style={{ marginLeft: "5px", border: "1px solid red", borderRadius: "50%", fontSize: "0.875rem", width: "20px", backgroundColor: "#FF8181", color: "white" }}>
                                        {countCartItems}
                                    </button>) : ("")}{" "}
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>




            {/* -----------------------navbar for maxwidt 1400 px---------------------------- */}
            <div className={showMenuBar ? classes.show : classes.hidden}>
                <div className={classes.navMain}>
                    <div className={classes.heardBarContainer}>
                        <div className={classes.iconBar}>
                            <button onClick={handleBar}>{bars}</button>
                        </div>
                        <div className={classes.logo}>
                            <a href="/"><img src="/images/Logo/LOGO-Sm.png" alt="logo" /></a>
                        </div>
                        <div style={{ margin: "auto 0 auto 25px" }}>
                            <button>{search}</button>
                        </div>
                        <div style={{ margin: "auto 0" }}>
                            <button style={{ marginRight: "0" }}>{shoppingCart}</button>
                            {countCartItems ? (
                                <button
                                    style={{ margin: "0 0 0 5px", border: "1px solid red", borderRadius: "50%", fontSize: "0.875rem", width: "20px", backgroundColor: "#FF8181", color: "white" }}>
                                    {countCartItems}
                                </button>) : ("")}{" "}
                        </div>
                    </div>
                </div>

                {/* -----------------------menu for hidden---------------------------- */}
                <div className={classes.menuContainer}>
                    <nav className={classes.menu}>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">Shop</a>
                            </li>
                            <li>
                                <a href="/">Products</a>
                            </li>
                            <li>
                                <a href="/">Pages</a>
                            </li>
                            <li>
                                <a href="/">Blog</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                            <li>
                                <a href="/">Login</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;