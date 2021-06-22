import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import classes from "./CategorySection.module.css";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} color="#6A6A6A#" />;
const arrowRight = <FontAwesomeIcon icon={faArrowRight} color="#6A6A6A#" />;



const CategorySection = () => {
    return (
        <section className={classes.cateSec}>
            <div>
                <p className={classes.textTop}>{"{ Best Collections }"}</p>
                <p className={classes.textMid}><strong>Shop by</strong> categories</p>
                <p className={classes.textLow}>Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis voluptate sequuy</p>
            </div>
            <div className={classes.imgContainer}>
                <div className={classes.arrow}>
                    <button className={classes.prev}>
                        {arrowLeft}
                    </button>
                </div>
                <div className={classes.imgInner}>
                    <div>
                        <img src="images/CateSec/img270x270.png" alt="Chair" />
                        <p><a href="/">Chair (530)</a></p>
                    </div>
                    <div>
                        <img src="images/CateSec/img270x270.png" alt="Child Toys" />
                        <p><a href="/">Child Toys(65)</a></p>
                    </div>
                    <div>
                        <img src="images/CateSec/img270x270.png" alt="Wooden Light" />
                        <p><a href="/">Wooden Light (56)</a></p></div>
                    <div>
                        <img src="images/CateSec/img270x270.png" alt="Kitchen Accessories" />
                        <p><a href="/">Kitchen Accessories (20)</a></p></div>
                </div>
                <div className={classes.arrow}>
                    <button className={classes.next}>
                        {arrowRight}
                    </button>
                </div>
            </div>
            <button className={classes.btn}>
                {"{ all categories }"}
            </button>

        </section>
    );
};

export default CategorySection;