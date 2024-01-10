import React from "react";
import './styles.css';
import Carousel from '../../components/Carousel'
const IndividualCourse = () =>{
    return(
        <div className="individualBlock">
        <div className="titleIndividualBlock">
            <p>Curs <span className="individual">INDIVIDUAL</span> </p>
        </div>
        <div className="individualContentBlock">
            <div className="individualCaruselMobile"><Carousel/></div>
            <div className="individualInfoBlock">
                <h1>Descriere</h1>
                <p>
                Cursul de Engleză Individuală oferă o experiență personalizată de învățare, cu o lecție de 60 de minute la doar 30 EUR. Acest format exclusiv îți permite să te concentrezi asupra nevoilor tale specifice și să progresezi rapid. Indiferent dacă ești la început de drum sau dorești să-ți perfectionezi abilitățile, lecțiile individuale îți oferă flexibilitate și adaptabilitate. Beneficiază acum de atenție personalizată și înscrie-te pentru a-ți atinge obiectivele lingvistice într-un mod eficient și cu un profesor dedicat! 🌐📚<br/><br/>
                </p>
                <div className="GiftText">
                            <p>🎁</p> 
                        <p>Feedback personalizat<br/>
                        Materiale gratuite!</p>

                </div>
            </div>
            <div className="individualTicket_phoneBlock">
                <div className="individualTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="individualButtonWhite">MAKE OFFER</button>
                </div>
                <Carousel/>
            </div>
        </div>
    </div>
    )
}
export default IndividualCourse