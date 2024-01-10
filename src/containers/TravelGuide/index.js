import React from "react";
import './styles.css';
import BoockPage1 from '../../assets/images/boockPage1.png'
import BoockPage2 from '../../assets/images/boockPage2.png'
import BoockPage3 from '../../assets/images/boockPage3.png'
import BoockPage4 from '../../assets/images/boockPage4.png'
import BoockPage5 from '../../assets/images/boockPage5.png'

import Slider from "react-slick";

const TravelGuide = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <div className="TravelGuideBlock">
            <div className="TravelGuideTitleBlock">
                <p>Gid pentru <span className="calatorii">CALATORII</span></p>
            </div>
            <div className="TravelGuideContentBlock">
                <div className="TravelGuideBoockBlock">
                    <Slider {...settings}>
                        <div className="BoockPage">
                            <img src={BoockPage1} alt=''/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage2} alt=''/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage3} alt=''/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage4} alt=''/>
                        </div>
                        <div className="BoockPage">
                            <img src={BoockPage5} alt=''/>
                        </div>
                    </Slider>
                </div>
                <div className="TravelGuideInfoBlock">
                    <h1>Descrierea manualului:</h1>
                    <p>Ghidul de Călătorii: Top Fraze în Engleză este disponibil sub formă electronică în format PDF, oferind o soluție practică și accesibilă pentru călătorii. După efectuarea plății, ai opțiunea de a descărca ghidul direct pe telefon sau de a-l printa pe hârtie. Cu cele 68 de pagini informative, acest ghid acoperă o gamă largă de situații de călătorie, furnizând fraze esențiale pentru rezervările la hotel, interacțiunile în restaurante, orientarea în oraș și comunicarea cu localnicii. Un aspect remarcabil este că, odată ce ai achiziționat ghidul, vei avea acces la el pe tot parcursul vieții tale. Astfel, călătoriile tale vor fi însoțite de un instrument util și de încredere pentru a te exprima eficient în limba engleză, contribuind la o experiență de călătorie memorabilă.</p>
                    
                    <ul className="TravelGuidelistof">
                        <p>El te va ajuta să:</p>
                        <li>Economisești timp și bani în învățarea limbii engleze;</li>
                        <li>Înveți mai rapid engleză pe care o vorbesc nativii;</li>
                        <li>Cunoști vocabularul de bază aplicat în călătorii;</li>
                        <li>Înveți fraze întregi care te vor ajuta în comunicare în limba engleză;</li>
                        <li>Vorbești mai încrezut limba atunci când ești într-o țară străină; </li>
                        <li>Ieși ușor din situațiile neplăcute în călătorie;</li>
                    </ul>
                    <button>MAKE OFFER</button>
                </div>
            </div>
        </div>
    )
}
export default TravelGuide