import React from "react";

import IPChecker from "../components/IPChecker"; // Import the IPChecker component
import Banner from "../components/Banner";
import Opis from "../components/Opis";
import Form from "../components/Form";
import Galeria from "../components/Galeria";
import Footer from "../components/Footer";
import Zaplac from "../components/Zaplac";

import img_b0 from "../image/b0.jpeg";
import img_b1 from "../image/b1.jpg";
import img_b2 from "../image/b2.jpg";
import img_b3 from "../image/b3.jpg";

import img_o1 from "../image/o3.jpg";
import img_o2 from "../image/o4.jpg";
import img_o3 from "../image/o2.jpg";
import img_o4 from "../image/o1.jpg";

import img_g1 from "../image/g1.jpg";
import img_g2 from "../image/g2.jpg";
import img_g3 from "../image/g3.jpg";
import img_g4 from "../image/g4.jpg";
import img_g5 from "../image/g5.png";
import img_g6 from "../image/g6.jpg";
import img_g7 from "../image/g7.jpg";
import img_g8 from "../image/g8.png";
import img_g9 from "../image/g9.jpg";
import img_g10 from "../image/g10.jpg";
import img_g11 from "../image/g11.jpg";
import img_g12 from "../image/g12.jpg";


function Home() {
    return (
        <div>
            <IPChecker />

            <Banner title="Prezenty świąteczne dla dzieci z domów dziecka" img={img_b0} />

            <Opis img={img_b2} img_1={img_o1} img_2={img_o2} img_3={img_o3} img_4={img_o4} />
        
            <Form img={img_b1} />

            <Galeria img={img_b3} img_1={img_g1} img_2={img_g2} img_3={img_g3} img_4={img_g4} img_5={img_g5} img_6={img_g6} img_7={img_g7} img_8={img_g8} img_9={img_g9} img_10={img_g10} img_11={img_g11} img_12={img_g12} />

            <Footer img={img_b0}/>

            <Zaplac />

        </div>
    );
}

export default Home;
