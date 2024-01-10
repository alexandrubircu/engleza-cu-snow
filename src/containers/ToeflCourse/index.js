import React from "react";
import './styles.css';
import Carousel from '../../components/Carousel'

const ToeflCourse = () =>{
    return(
        <div className="toeflBlock">
            <div className="titleToeflBlock">
                <p>Curs <span className="TOEFL">TOEFL</span> </p>
            </div>
            <div className="toeflContentBlock">
                <div className="toeflCaruselMobile"><Carousel/></div>
                <div className="toeflInfoBlock">
                    <h1>Descriere</h1>
                    <p>
                    Cursul online TOEFL iBT oferă o pregătire eficientă în 20 de lecții, concentrându-se pe dezvoltarea abilităților necesare pentru a obține un scor înalt în secțiunile Reading, Listening, Speaking și Writing ale examenului. Cu flexibilitatea învățării online, poți participa de oriunde.<br/><br/>
                    Cursul include feedback personalizat de la profesori experimentați. Materialele necesare sunt oferite gratuit, iar platforma online furnizează resurse interactive și exerciții practice. Cu un curriculum bine structurat și suportul profesorilor, vei avea toate instrumentele pentru a obține un scor remarcabil în testul TOEFL iBT. Înscrie-te acum și pregătește-te cu succes!<br/><br/>
                    </p>
                    <div className="GiftText">
                            <p>🎁</p> 
                        <p>Feedback personalizat<br/>
                        Materiale gratuite!</p>

                    </div>
                </div>
                <div className="ticket_phoneBlock">
                    <div className="toeflTicket">
                        <h2>Cursul</h2>
                        <p>TOEFL</p>
                        <p>DURATA: 20 de zile</p>
                        <p>4 900 MDL / 245 EUR</p>
                        <button className="toeflButtonWhite">MAKE OFFER</button>
                    </div>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}
export default ToeflCourse