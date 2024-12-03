import React, { useEffect, useState } from "react";

function Form({ img }) {
    const [sum, setSum] = useState("10");

    useEffect(() => {
        const storedSum = sessionStorage.getItem("totalSum");
        if (storedSum) {
            setSum(storedSum);
        }
    }, []);

    useEffect(() => {
        sessionStorage.setItem("totalSum", sum);
    }, [sum]);

    const amounts = [10, 20, 50, 100];

    return (
        <div
            className="m-0 p-0"
            style={{
                backgroundImage: `url(${img || "fallback-image.jpg"})`,
                backgroundPosition: "center",
                objectFit: "cover",
                position: "relative",
                height: "auto",
            }}
        >
            <div
                style={{ backdropFilter: "blur(10px)" }}
                className="m-0 p-3 pt-0 text-white row justify-content-center align-items-center border-top border-2"
            >
                {/* <div style={{ height: "45px", width: "100%" }}></div> */}
                <div
                    style={{
                        minHeight: "90px",
                        fontSize: "24px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    className="m-0 p-2 pb-3 ps-5 pe-5 col-auto text-center fw-bold rounded-bottom-circle d-flex justify-content-center align-items-center border border-2 border-top-0"
                >
                    Dołącz do nas!
                </div>
                <div style={{ height: "45px", width: "100%" }}></div>
                <div className="m-0 p-0 row justify-content-center">
                    {amounts.map((amount, index) => {
                        const isSelected = parseInt(sum) === amount;
                        return (
                            <button
                                key={amount}
                                style={{
                                    minWidth: "120px",
                                    boxShadow: "1px 15px 60px black",
                                    minHeight: "60px",
                                    border: isSelected
                                        ? "2px solid white"
                                        : "none",
                                    cursor: isSelected
                                        ? "not-allowed"
                                        : "pointer",
                                    padding: "0",
                                    paddingTop: "3px",
                                    // backgroundImage: `url(${img})`,
                                    // backgroundPosition: "center",
                                    // backgroundSize: "cover",
                                    border: "2px solid var(--bs-white)",
                                    objectFit: "cover",
                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    maxWidth: "300px",
                                    fontStyle: "italic",
                                }}
                                className={`o_btn_nav col m-2 row justify-content-center align-items-center rounded-pill ${
                                    isSelected
                                        ? "disabled border-primary bg-primary"
                                        : ""
                                }`}
                                onClick={() => !isSelected && setSum(amount)}
                                disabled={isSelected}
                            >
                                <div
                                    style={
                                        {
                                            // backgroundColor: "rgba(0, 0, 0, 0.5)",
                                            // backdropFilter: "blur(5px)",
                                        }
                                    }
                                    className={`m-0 p-0 ps-3 pe-3 col-auto rounded-pill  ${
                                        isSelected ? " " : ""
                                    }`}
                                >
                                    {amount} zł
                                </div>
                            </button>
                        );
                    })}
                </div>
                <div style={{ height: "45px", width: "100%" }}></div>
                <button
                    style={{
                        boxShadow: "1px 15px 60px black",
                        minHeight: "60px",
                        fontSize: "21px",
                        maxWidth: "240px",
                    }}
                    className="o_btn_nav p-1 ps-5 pe-5 rounded-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                >
                    BLIK
                </button>
                <div style={{ height: "15px", width: "100%" }}></div>
            </div>
        </div>
    );
}

export default Form;
