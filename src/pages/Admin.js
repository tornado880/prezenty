import React from "react";

import Blik from "../components/Blik";
import Footer from "../components/Footer";

import img_b1 from "../image/b1.jpg";

function Admin() {

    return (
        <div>
            <Blik />
            <Footer img={img_b1}/>

        </div>
    );
}

export default Admin;
