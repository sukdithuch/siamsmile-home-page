import React from "react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = (props) => {

    const { countCartItems } = props;

    return (
        <>
            <Navbar countCartItems={countCartItems} />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default Layout;