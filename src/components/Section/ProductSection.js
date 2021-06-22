import React from "react";

import classes from "./ProductSection.module.css";

const ProductSection = () => {
    return (
        <section className={classes.productSec}>
            <div className={classes.imageContainer}>
                <img src="/images/ProductSec/img421x421.png" alt="product" />
            </div>
            <div className={classes.container}>
                <div className={classes.textContainer}>
                    <div className={classes.header}>
                        <h6>Get 30% offer</h6>
                        <h1>Smart Wooden watch 20.3</h1>
                        <p>Wuibusdam consequat, tempor earum sollicitudin sed pretium, eu. Corrupti minima fugit! Fuga deserunt cillum culpa? Diamlorem blandit tortor. Cras sagittis sollicitudin voluptate? Consequatur excepteur</p>
                    </div>
                    <div>
                        <p className={classes.color}>Color:
                            <button className={classes.grey}></button>
                            <button className={classes.red}></button>
                            <button className={classes.pink}></button>
                        </p>
                        <div className={classes.priceContainer}>
                            <div className={classes.price}>
                                <div>
                                    <span className={classes.price1}>$62.00</span>
                                    <span className={classes.price2}>$32.00</span>
                                </div>
                            </div>
                            <button className={classes.btn}>
                                Add To Cart
                            </button>
                        </div>
                        <div className={classes.category}>
                            <p>Category:
                                <span>Wall Clock</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;