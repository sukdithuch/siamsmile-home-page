import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from "./HeroSection.module.css";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} color="#6A6A6A#" />;
const arrowRight = <FontAwesomeIcon icon={faArrowRight} color="#6A6A6A#" />;

const HeroSection = () => {
    return (
        <section className={classes.heroSection}>
            <header className={classes.hero}>
                <div className={classes.arrow}>
                    <button className={classes.prev}>
                        {arrowLeft}
                    </button>
                </div>
                <div className={classes.imgContainer} style={{ backgroundImage: "url(images/HeroSec/img1718x613.png)" }}>
                    <div className={classes.text}>
                        <p>Up to 30% off</p>
                        <h1>Sofa, Stand Table Lighting</h1>
                        <button>{"{ Shop now }"}</button>
                    </div>
                </div>
                <div className={classes.arrow}>
                    <button className={classes.next}>
                        {arrowRight}
                    </button>
                </div>
            </header>
            <div className={classes.imgFooterContainer}>
                <div className={classes.imgFooter}>
                    <div className={classes.imgFooterFlex}>
                        <div className={classes.shawdow}>
                            <div className={classes.triangle}></div>
                            <div className={classes.square}>
                                <img src="/images/HeroSec/img105x98.png" alt="img105x98" />
                            </div>
                        </div>
                        <div className={classes.shawdow}>
                            <div className={classes.triangle}></div>
                            <div className={classes.square}>
                                <img src="/images/HeroSec/img105x98.png" alt="img105x98" />
                            </div>
                        </div>
                        <div className={classes.shawdow}>
                            <div className={classes.triangle}></div>
                            <div className={classes.square}>
                                <img src="/images/HeroSec/img105x98.png" alt="img105x98" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;