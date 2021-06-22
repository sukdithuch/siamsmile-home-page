import React from "react";

import classes from "./LargeImgSection.module.css";

const LargeImgSection = () => {
    return (
        <section className={classes.lageSec}>
            <div className={classes.lageImg} style={{ backgroundImage: "url(images/LageSec/img960x588.png)" }}>
                {/* <img src="images/LageSec/img960x588.png" alt="lageImg" /> */}
                <div className={classes.text}>
                    <div className={classes.textLeft}>
                        <p className={classes.textTop}>Up to 30% off</p>
                        <h1 className={classes.textMid}>Sofa,<br />Stand Table</h1>
                        <p className={classes.textLow}>Starting From - <span>$150</span></p>
                        <button className={classes.btn}>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className={classes.lageImg} style={{ backgroundImage: "url(images/LageSec/img960x588.png)", width: "100%" }}>
                {/* <img src="images/LageSec/img960x588.png" alt="lageImg" /> */}
                <div className={classes.text}>
                    <div className={classes.textRight}>
                        <p className={classes.textTop}>Up to 30% off</p>
                        <h1 className={classes.textMid}>Kook,<br />Kitchen Set</h1>
                        <p className={classes.textLow}>Starting From - <span>$200</span></p>
                        <button className={classes.btn}>Shop Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LargeImgSection;