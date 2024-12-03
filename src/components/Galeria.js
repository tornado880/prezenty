import React, { useState, useEffect } from "react";



function Galeria({ img, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12 }) {
    return (
        <div
            className="m-0 p-0 row justify-content-center"
            style={{
                position: "relative",
                height: "auto",
                backgroundImage: `url(${img})`,
                // backgroundSize: "cover",
                backgroundPosition: "center",
                objectFit: "cover",
            }}
        >
            <div
                style={{
                    backdropFilter: "blur(10px)",
                    // backgroundColor: "hsla(0, 0%, 0%, 0.25)",
                    width: "100vw",
                }}
                className="m-0 p-3 pt-0 text-white row justify-content-center align-items-center border-top border-2"
            >
                
                {/* <div style={{ height: "45px", width: "100%" }}></div> */}

                <div
                    style={{
                        minHeight: "90px",
                        fontSize: "24px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        // boxShadow: "1px 1px 50px black",
                        // width: '360px'
                    }}
                    className="m-0 p-2 pb-3 ps-5 pe-5 col-auto d-flex text-center justify-content-center align-items-center fw-bold rounded-bottom-circle border border-2 border-top-0"
                >
                    Zdjęcia
                </div>
                <div
                    style={{ height: "52px", minWidth: "360px" }}
                    className="m-0 p-0"
                ></div>

<div style={{maxWidth: '2400px'}} className="m-0 p-0 row justify-content-center align-items-center">
                    {[
                        {
                            img: img_1,
                           
                        },
                        {
                            img: img_2,
                           
                        },
                        {
                            img: img_3,
                           
                        },{
                            img: img_4,
                           
                        },{
                            img: img_5,
                           
                        },{
                            img: img_6,
                           
                        },{
                            img: img_7,
                           
                        },{
                            img: img_8,
                           
                        },{
                            img: img_9,
                           
                        },{
                            img: img_10,
                           
                        },{
                            img: img_11,
                           
                        },{
                            img: img_12,
                           
                        },
                    ].map((field, index) => (
                        <div
                        style={{ maxWidth: "600px" }}
                        className="m-0 p-0 col-12 col-md-6 col-xl-4 col-xxl-3"
                      >
                        <div
                          key={index}
                          style={{
                            backgroundImage: `url(${field.img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                            boxShadow: "1px 1px 50px black",
                          }}
                          className="m-2 mb-3 p-0 border border-2 rounded-4"
                        >
                          <div
                            style={{
                              position: "relative",
                              borderRadius: "16px",
                              overflow: "hidden",
                            }}
                            className="d-flex flex-column"
                          >
                            <img
                              style={{
                                maxHeight: "300px",
                                objectFit: "cover",
                                width: "100%",
                              }}
                              src={field.img}
                              alt="Image description"
                              className="rounded-4"
                            />
                      
                            {/* Overlay for text */}
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                // background: "rgba(0, 0, 0, 0.6)", // Semi-transparent background
                                color: "#fff",
                                padding: "10px 15px",
                                borderRadius: "8px 0 0 0", // Round top-left corner
                                backdropFilter: 'blur(3px)',
                                width: '60px'
                              }}
                            >
                              <h1
                                style={{
                                  fontSize: "16px",
                                  margin: 0,
                                }}
                              >
                                
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    ))}
                </div>
                {/* <div
                    style={{ height: "15px", minWidth: "360px" }}
                    className="m-0 p-0"
                ></div> */}
            </div>                </div>

    );
}

export default Galeria;
