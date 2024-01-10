import React from "react";
import './styles.css';
import Carousel from '../../components/Carousel'

const CambridgeCourse = () =>{
    return(
        <div className="cambridgeBlock">
        <div className="titleCambridgeBlock">
            <p>Curs <span className="cambridge">CAMBRIDGE</span> </p>
        </div>
        <div className="cambridgeContentBlock">
            <div className="cambridgeCarouselMobile"><Carousel/></div>
            <div className="CambridgeInfoBlock">
                <h1>Descriere</h1>
                <p>
                    Cursul online FCE Cambridge în grupuri oferă 20 de lecții intensive pentru pregătirea eficientă a examenului FCE. Cu un tarif de doar 4,900 MDL sau 245 EUR, vei beneficia de feedback personalizat ca un cadou special. Toate materialele necesare sunt disponibile gratuit, eliminând costurile suplimentare.<br/><br/>
                    Platforma online asigură flexibilitate în învățare, iar lecțiile interactive și resursele de calitate te vor ajuta să te pregătești pentru toate secțiunile testului. Cu un curriculum bine structurat și sprijinul profesorilor experimentați, vei avea toate resursele pentru a obține un rezultat de succes în examenul FCE Cambridge. Înscrie-te acum și începe călătoria ta către un rezultat remarcabil! 🚀📚<br/><br/>
                </p>
                <div className="GiftText">
                            <p>🎁</p> 
                        <p>Feedback personalizat<br/>
                        Materiale gratuite!</p>

                </div>
            </div>
            <div className="cambridgeTicket_phoneBlock">
                <div className="cambridgeTicket">
                    <h2>Cursul</h2>
                    <p>A1.1</p>
                    <p>DURATA: 21 de zile</p>
                    <p>3 150 MDL / 160 EUR</p>
                    <button className="cambridgeButtonWhite">MAKE OFFER</button>
                </div>
                <Carousel/>
            </div>
        </div>
    </div>
    )
}
export default CambridgeCourse