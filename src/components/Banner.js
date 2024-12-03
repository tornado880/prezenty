import React from "react";

function Banner({ title, img }) {
    return (
        <div
            className="m-0 p-0 "
            style={{
                position: "relative",
                width: "100%",
                height: "50vh",
            }}
        >
            <a
                className="m-0 p-0"
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    // cursor: "default",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    className="m-0 p-0"
                    src={img}
                />
            </a>

            <div
                style={{
                    fontSize: "24px", // Adjusted to be responsive
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    minHeight: "60px",
                    // minWidth: "161px",
                    transform: "translate(-50%, -50%)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textShadow: "1px 1px 10px black, 1px 1px 30px black",
                    // boxShadow: "1px 1px 30px black",
                    backdropFilter: "blur(5px)",
                    backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                    // minWidth: "360px",

                    // width: '100vw',
                }}
                className="m-0 p-3 ps-5 pe-5 fw-bold text-white text-center rounded-pill border border-2"
            >
                {title}
            </div>
        </div>
    );
}

export default Banner;
