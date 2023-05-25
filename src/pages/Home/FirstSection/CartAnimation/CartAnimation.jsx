import Card from "react-animated-3d-card";
import {useState} from "react";
import card from "./card.png"
import logo from "./312.svg"
import city from "./city.svg"
import city321 from "./city321.kg.png"
import text from "./text.svg"

export default function CartAnimation() {

    return (
        <div
            className="App"
            style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center"
            }}
        >
            <Card
                cursorPointer={false}
                shineStrength={0.75}
                style={{
                    background: `url(${card}) center/cover no-repeat`,
                    width: "445px",
                    height: "253px",
                    cursor: "pointer"
                }}
            >
                <div>
                    {/*<div>*/}
                    {/*    <img*/}
                    {/*        style={{*/}
                    {/*            position: "absolute",*/}
                    {/*            left: "25px",*/}
                    {/*            top: "25px",*/}
                    {/*            height: "50px"*/}
                    {/*        }}*/}
                    {/*        src={logo}*/}
                    {/*        className="card-item__chip"*/}
                    {/*        alt="credit card chip"*/}
                    {/*    ></img>*/}
                    {/*</div>*/}
                    <img
                        style={{
                            position: "absolute",
                            right: "25px",
                            top: "25px",
                            height: "13px"
                        }}
                        src={city321}
                        className="card-item__chip"
                        alt="credit card chip"
                    ></img>
                </div>
                <div
                    style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
               {/*1234*/}
                </div>
                <div>
                    <label
                        style={{
                            color: "white",
                            position: "absolute",
                            bottom: "130px",
                            right: "10px"
                        }}
                    >
                        <img
                            src={text} alt="city"
                            style={{
                                width: "200px",
                                height: "54px"
                            }}

                        />
                    </label>
                    <label
                        style={{
                            color: "white",
                            position: "absolute",
                            bottom: "70px",
                            right: "95px"
                        }}
                    >
                        <img
                            style={{
                                height: "100px"
                            }}
                            src={city}
                            className="card-item__chip"
                            alt="credit card chip"
                        ></img>
                    </label>
                </div>

                <div>
                    <label
                        style={{
                            color: "white",
                            position: "absolute",
                            bottom: "10px",
                            left: "25px",
                            opacity: 1,
                            fontSize: "25px"
                        }}
                    >
                        <div className="ocr"
                             style={{
                                 fontSize: "18px",
                                 color: "#fff"
                             }}
                        >

                            Vindiza Aziz

                        </div>
                        <div
                            // style={{
                            //     fontSize: "30px",
                            //     fontFamily: "Fira Code",
                            //     color: "white"
                            // }}

                        >
                            <label className="ocr">1234</label>
                            <label className="ocr" style={{marginLeft: "10px"}}>1234</label>
                            <label className="ocr" style={{marginLeft: "10px"}}>1234</label>
                            <label className="ocr" style={{marginLeft: "10px"}}>1234</label>
                        </div>

                    </label>
                    <label
                        style={{
                            color: "white",
                            position: "absolute",
                            bottom: "120px",
                            left: "10px",
                            opacity: 1,
                            fontSize: "25px"
                        }}
                    >
                        <img
                            style={{
                                height: "100px"
                            }}
                            src={logo}
                            className="card-item__chip"
                            alt="credit card chip"
                        ></img>
                    </label>
                </div>
            </Card>

        </div>
    );
}
