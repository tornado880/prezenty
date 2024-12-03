import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Footer({img}) {
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (
        <div
            className="m-0 p-0 border-top border-2"
            style={{
                position: "relative",
                width: "100%",
                // height: "420px",
                backgroundImage: `url(${img})`, // Correct way to use a variable for background image
                backgroundSize: "cover", // Make sure the image covers the div properly
                backgroundPosition: "bottom", // Centers the background image
                objectFit: "cover", // Ensures the image maintains its aspect ratio and covers the container
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    color: "white",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "hsla(0, 0%, 0%, 0.76)",
                }}
                className="m-0 p-0 row align-items-end justify-content-between "
            >
                <div className="m-0 p-0 col-12 text-white row justify-content-around align-items-center">
                   
                </div>

                {/* <div style={{ height: "60px", width: "100%" }} className="m-0 p-0"></div> */}


                <Link
                    style={{ height: "60px", width: "30px", cursor: 'default' }}
                    className="m-0 p-0 col-auto"
                    to='/Polska/Admin'
                >
                    
                </Link>

                <Link
                    style={{ height: "60px", fontSize: "18px", cursor: 'default' }}
                    className="o_text m-0 p-0 col fw-normal"
                    to='/Polska'
                >
                                        © 2024 Wastocore

                </Link>
                
               
            </div>
        </div>
    );
}

export default Footer;
