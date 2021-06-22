import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasFaStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';

import classes from "./OffersSection.module.css";
import { offersProducts } from "../../Data";

const star = <FontAwesomeIcon icon={fasFaStar} color="#C9A75C" />;
const starHalf = <FontAwesomeIcon icon={faStarHalfAlt} color="#C9A75C" />;
const starEmtry = <FontAwesomeIcon icon={farFaStar} color="#E1E1E1" />;

const OffersSection = (props) => {

    const { addToCart, removeFromCart, cartItems } = props;




    const points = (n) => {
        if (n === 5) {
            let five = [];
            for (let i = 1; i <= n; i++) {
                five.push(star);
            }
            return five;
        }
        if (n < 5) {
            let lessFive = [];
            for (let i = 1; i <= n; i++) {
                lessFive.push(star);
            }
            if (n < 5) {
                let noPoint = 5 - n;
                for (let j = 0; j < noPoint; j++) {
                    lessFive.push(starEmtry);
                }
            }
            return lessFive;
        }

    }


    return (
        <section className={classes.offersSec}>
            <div>
                <p className={classes.textTop}>{"{ Cyclone Offer }"}</p>
                <p className={classes.textMid}><strong>Best Daily Deal</strong> Offers</p>
                <p className={classes.textLow}>Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis voluptate sequuy</p>
            </div>
            <div className={classes.listGroup}>
                <button>Best Sellers</button>
                <button>Featured</button>
                <button>Top Products</button>
            </div>
            <div className={classes.productitems}>
                <div className={classes.containerItems}>
                    {offersProducts.map((items) =>
                        <div className={classes.item} key={items.id}>
                            <div>
                                <img src={items.img} alt={items.title} />
                            </div>
                            <div>
                                <h1><button onClick={() => addToCart(items)}>{items.title}</button></h1>
                                <h3>{points(items.points)} (32)</h3>
                                <h2>${items.price}</h2>
                                <p>{items.category}</p>
                            </div>
                        </div>)}
                </div>
            </div>
            <div>
                <button className={classes.btn}>
                    {"{ all categories }"}
                </button>
            </div>
        </section>
    );
};

export default OffersSection;