import React, { useState, useEffect } from "react";



function Opis({ img, img_1, img_2, img_3, img_4 }) {
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
                    Co robimy?
                </div>
                <div
                    style={{ height: "52px", minWidth: "360px" }}
                    className="m-0 p-0"
                ></div>

<div className="m-0 p-0 row justify-content-center align-items-top">
{[
                        {
                            label: "Dlaczego to robimy?",
                            img: img_2,
                            value_1:
                                "W Polsce tysiące dzieci spędza Święta w domach dziecka lub pod opieką placówek. To właśnie do nich kierujemy naszą pomoc – dzieci, które marzą o tym, co dla innych jest codziennością.",
                            value_2:
                                "Dla wielu z nich nasz prezent to coś więcej niż upominek. To iskra nadziei, pierwszy prawdziwy dar od serca, który mówi: 'Jesteś ważny, jesteś kochany'.",
                            value_3:
                                "Nie chodzi tylko o rzeczy – chodzi o wspomnienia. Wspomnienia o Świętach, które były ciepłe i pełne radości. Dzięki Wam możemy to zrobić!",
                        },
                        {
                            label: "Jak to się zaczęło?",
                            img: img_4,
                            value_1:
                                "Kilka lat temu grupka przyjaciół postanowiła zorganizować świąteczne paczki dla dzieci w potrzebie. Była to mała inicjatywa, ale miłość i energia szybko się rozprzestrzeniły.",
                            value_2:
                                "Co roku akcja rosła. Z kilkudziesięciu prezentów zrobiły się setki, a potem tysiące. W zeszłym roku spełniliśmy marzenia 3200 dzieci – niesamowity sukces możliwy dzięki Wam.",
                            value_3:
                                "W tym roku czeka nas wyzwanie – ponad 6500 listów pełnych świątecznych pragnień. Wierzymy, że z Waszą pomocą każde dziecko otrzyma swój magiczny moment.",
                        },
                        {
                            label: "Jak możesz pomóc?",
                            img: img_3,
                            value_1:
                                "Każdy list to osobista historia – marzenia o zabawce, ciepłym szaliku czy upragnionej książce. Te dzieci nie proszą o luksus, tylko o radość.",
                            value_2:
                                "Zbieramy listy, a darczyńcy, jak Ty, wcielają się w rolę Świętego Mikołaja. Otrzymujesz list i spełniasz marzenie konkretnego dziecka.",
                            value_3:
                                "Każdy prezent, który wręczamy, to nie tylko rzecz. To uśmiech na małej twarzy, to serce pełne wdzięczności, to magia Świąt w najczystszej postaci.",
                        },
                        {
                            label: "Kogo wspieramy?",
                            img: img_1,
                            value_1:
                                "Nasza pomoc trafia do dzieci i młodzieży z domów dziecka oraz ośrodków opieki z całej Polski. To właśnie one są sercem naszej akcji.",
                            value_2:
                                "Każdy z tych młodych ludzi nosi w sobie marzenia. Dzięki Tobie możemy je spełnić, zmieniając zwykłe Święta w coś wyjątkowego.",
                            value_3:
                                "Twoje zaangażowanie to więcej niż wsparcie – to tworzenie chwil pełnych radości, które zostaną z nimi na całe życie.",
                        },

                       

                       
                    ].map((field, index) => (
                        <div style={{maxWidth: '600px', }}
                            className="m-0 p-0 col-12 col-md-6 col-xl-4 col-xxl-3"
                        >
                            <div
                                key={index}
                                style={{
                                    backgroundImage: `url(${field.img})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    // maxWidth: "360px",
                                    minHeight: "150px",
                                    position: "relative",
                                    boxShadow: "1px 1px 50px black",
                                }}
                                className="m-2 mb-3 p-0 rounded-5 border border-2 rounded-4 "
                            >
                                <div
                                    style={{
                                        backgroundColor: "hsla(0, 0%, 0%, 0.5)",
                                        backdropFilter: "blur(5px)",
                                        minHeight: "100%",
                                    }}
                                    className="m-0 p-0 pb-3 rounded-5 d-flex flex-column rounded-4 "
                                >
                                    <img
                                        style={{
                                            maxHeight: "360px",
                                            objectFit: "cover",
                                            height: "100%",
                                            zIndex: 2,
                                            overflow: "hidden",
                                        }}
                                        src={field.img}
                                        className="m-0 p-0 mb-2 mb-sm-0 rounded-top-5 col-auto border-bottom border-2 rounded-4 "
                                    />
                                
                                    <p
                                        style={{
                                            zIndex: 995,
                                            fontSize: "18px",
                                            color: "white",
                                            minHeight: "45px",
                                            backgroundColor:
                                                "hsla(0, 0%, 0%, 0.25)",
                                            textShadow:
                                                "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black",
                                                width: 'auto'
                                        }}
                                        className="m-0 p-2 ps-4 pe-4 mt-2 mb-2 ms-auto me-auto fw-bold text-center d-flex align-items-center justify-content-center rounded-4"
                                    >
                                        {field.label}
                                    </p>
                                    <div className="m-0 p-0 mb-2 mb-sm-0 col">
                                        {[
                                            field.value_1,
                                            field.value_2,
                                            field.value_3,
                                        ].map((value, idx) => (
                                            <p
                                                key={idx}
                                                style={{
                                                    left: "150px",
                                                    zIndex: 995,
                                                    fontSize: "15px",
                                                    color: "white",
                                                    minHeight: "45px",
                                                    fontStyle: "italic",
                                                    textShadow:
                                                        "1px 1px 10px black, 1px 1px 15px black, 1px 1px 20px black",
                                                }}
                                                className="m-0 p-1 ps-2 pe-2 d-flex align-items-center rounded"
                                            >
                                                &nbsp;&nbsp;&nbsp; {value}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>{" "}
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

export default Opis;
