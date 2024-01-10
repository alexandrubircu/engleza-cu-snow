import React, { useState } from "react";
import './styles.css';
import CoursesButton from '../../assets/images/CoursesButton.png'
import C1_1Image from '../../assets/images/C1.1Image.png'

const CoursesC1_C2 = () =>{
    const [value, setValue] = useState(0);
    const showcourse = () => {
        switch(value){
            case (0):
                return(
                   <div className="C1_C2infoCoursesBlock">
                        <img src={C1_1Image} alt=''/>
                        <div className="C1_C2ContentBlock">
                            <div className="C1_C2Title">
                                <p>C1.1</p>
                            </div>
                            <div className="C1_C2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case (1):
                return(
                    <div className="C1_C2infoCoursesBlock">
                        <img src={C1_1Image} alt=''/>
                        <div className="C1_C2ContentBlock">
                            <div className="C1_C2Title">
                                <p>C1.2</p>
                            </div>
                            <div className="C1_C2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case(2):
                return(
                    <div className="C1_C2infoCoursesBlock">
                       <img src={C1_1Image} alt=''/>
                        <div className="C1_C2ContentBlock">
                            <div className="C1_C2Title">
                                <p>B2.1</p>
                            </div>
                            <div className="C1_C2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
            case(3):
                return(
                    <div className="C1_C2infoCoursesBlock">
                        <img src={C1_1Image} alt=''/>
                        <div className="C1_C2ContentBlock">
                            <div className="C1_C2Title">
                                <p>B2.2</p>
                            </div>
                            <div className="C1_C2Text">
                                <p>Cursul include:<br/>
                                    Formatul lecțiilor / Online<br/>
                                    După absolvire / Certificat<br/>
                                    Manual / Format Digital<br/>
                                    Studenți / = 10<br/>
                                    Garanție / 100%
                                </p>
                            </div>
                        </div>
                    </div>
                )
                default :
                    return;
        }
    }
    return(
        <div className="C1_C2Block">
            <div className="C1_C2wrapper">
                <div className="C1_C2titleBlock">
                    <p>Cursurile <span className="C1_C2">C1-C2</span></p>
                </div>
                <div className="C1_C2_ContentBlock">
                    <div className="C1_C2coursesBlock">
                        <div className="C1_C2YelowTicket">
                            <h2>Cursul</h2>
                            <p>C1.1</p>
                            <p>DURATA: 24 de zile</p>
                            <p>3 600 MDL / 180 EUR</p>
                            <div className="C1_C2TiketButton">
                                <button className="C1_C2ButtonWhite">MAKE OFFER</button>
                                <button className="B1_B2ButtonMore" onClick={() => setValue(0)}><img src={CoursesButton} alt='' style={value === 0 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                        <div className="C1_C2WhiteTicket">
                            <h2>Cursul</h2>
                            <p>C1.2</p>
                            <p>DURATA: 24 de zile</p>
                            <p>3 600 MDL / 180 EUR</p>
                            <div className="C1_C2TiketButton">
                                <button className="C1_C2ButtonPink">MAKE OFFER</button>
                                <button className="B1_B2ButtonMore" onClick={() => setValue(1)}><img src={CoursesButton} alt='' style={value === 1 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                        <div className="C1_C2YelowTicket">
                            <h2>Cursul</h2>
                            <p>C2.1</p>
                            <p>DURATA: 24 de zile</p>
                            <p>3 600 MDL / 180 EUR</p>
                            <div className="C1_C2TiketButton">
                                <button className="C1_C2ButtonWhite">MAKE OFFER</button>
                                <button className="B1_B2ButtonMore" onClick={() => setValue(2)}><img src={CoursesButton} alt='' style={value === 2 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                        <div className="C1_C2WhiteTicket">
                            <h2>Cursul</h2>
                            <p>C2.2</p>
                            <p>DURATA: 24 de zile</p>
                            <p>3 600 MDL / 180 EUR</p>
                            <div className="C1_C2TiketButton">
                                <button className="C1_C2ButtonPink">MAKE OFFER</button>
                                <button className="B1_B2ButtonMore" onClick={() => setValue(3)}><img src={CoursesButton} alt='' style={value === 3 ? {transform:'rotate(180deg)'} : null}/></button>
                            </div>
                        </div>
                    </div>
                    {showcourse()}
                </div>    
        </div>
    </div>
    )
}
export default CoursesC1_C2