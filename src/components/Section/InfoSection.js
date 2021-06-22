import React from "react";

import classes from "./InfoSection.module.css";

const InfoSection = () => {
    return (
        <section className={classes.infoSec}>
            <div className={classes.image} style={{ backgroundImage: "url(/images/InfoSec/img1920x335.png" }}>
                <div className={classes.textContainer}>
                    <button>
                        <div className={classes.text}>
                            <div>
                                <img src="/images/InfoSec/img-card.png" alt="card" />
                            </div>
                            <div>
                                <h1>24/7 online support</h1>
                                <p>Call us for any order or delivery</p>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.textContainer}>
                    <button>
                        <div className={classes.text}>
                            <div>
                                <img src="/images/InfoSec/img-money.png" alt="money" />
                            </div>
                            <div>
                                <h1>Save 20% Every Sell</h1>
                                <p>Get offer for every day, month</p>
                            </div>
                        </div>
                    </button>
                </div>
                <div className={classes.textContainer}>
                    <button>
                        <div className={classes.text}>
                            <div>
                                <img src="/images/InfoSec/img-free.png" alt="free" />
                            </div>
                            <div>
                                <h1>Fast Free Shipping</h1>
                                <p>Order up to $80</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;