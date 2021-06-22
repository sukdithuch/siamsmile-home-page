import React from "react";

import classes from "./BlogSection.module.css";

const BlogSection = () => {
    return (
        <section className={classes.blogSec}>
            <div>
                <p className={classes.textTop}>{"{ Update Blog }"}</p>
                <p className={classes.textMid}><strong>get Our product</strong> selling news</p>
                <p className={classes.textLow}>Aobortis conubialaoreet pellentesque quod olorem nibh eius Facilis voluptate sequuy</p>
            </div>
            <div className={classes.container}>
                <div className={classes.blogContainer}>
                    <button>
                        <div className={classes.blog}>
                            <img src="/images/BlogSec/img369x254.png" alt="blog" />
                            <div className={classes.date}><p>09 May 21</p></div>
                            <div className={classes.detail}>
                                <h3>Saepe Ducimus Veniam Vem</h3>
                                <h6>Quibusdam sapiente neque irure quas diam, ligula at saepe nunc</h6>
                                <p>By (RT Shuvro) | Comments (56)</p>
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className={classes.blog}>
                            <img src="/images/BlogSec/img369x254.png" alt="blog" />
                            <div className={classes.date}><p>09 May 21</p></div>
                            <div className={classes.detail}>
                                <h3>Saepe Ducimus Veniam Vem</h3>
                                <h6>Quibusdam sapiente neque irure quas diam, ligula at saepe nunc</h6>
                                <p>By (RT Shuvro) | Comments (56)</p>
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className={classes.blog}>
                            <img src="/images/BlogSec/img369x254.png" alt="blog" />
                            <div className={classes.date}><p>09 May 21</p></div>
                            <div className={classes.detail}>
                                <h3>Saepe Ducimus Veniam Vem</h3>
                                <h6>Quibusdam sapiente neque irure quas diam, ligula at saepe nunc</h6>
                                <p>By (RT Shuvro) | Comments (56)</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.subscribeContainer}>
                    <div className={classes.subscribe}>
                        <div className={classes.nameInput}>
                            <img src="/images/BlogSec/Mask.png" alt="Mask" />
                            <p>Subscribe our newsletter</p>
                        </div>
                        <div><input type="email" name="subscribe" placeholder="     Enter your mail here" /></div>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;