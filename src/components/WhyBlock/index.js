import React from "react";
import './styles.css'
import whyImage from "../../assets/images/whyImage.png"

const WhyBlock = () => {
    return(
        <div className="whyBlock">
           <div className="whyBlockContent">
            <div className="whyBlockText">
                <h1>De ce sa alegi cursurile lui <span className="snow">Snow</span></h1>
                <div className="whyBlockContentRowPink">
                    <div className="whyBlockTextList">
                        <h2>Rămâi motivat<br/><span>Misiunea mea este să fac învățarea limbilor străine accesibilă tuturor</span></h2>
                    </div>
                </div>
                <div className="whyBlockContentRowWhite">
                    <div className="whyBlockTextList">
                        <h2>Descoperă oportunitatea cu Snow<br/><span>Cursurile de engleză transformă procesul de învățare într-o experiență deschisă și prietenoasă pentru toți cei dornici să-și dezvolte abilitățile lingvistice.</span></h2>
                    </div>
                </div>
                <div className="whyBlockContentRowYellow">
                    <div className="whyBlockTextList">
                        <h2>Rămâi inspirat cu Snow<br/><span>Cursurile de engleză sunt cheia spre reușita ta în această călătorie a cunoașterii.</span></h2>
                    </div>
                </div>
                <div className="whyBlockContentRowWhite">
                    <div className="whyBlockTextList">
                        <h2>Alege excelența alături de Snow<br/><span>Cursurile de engleză sunt create pentru a face învățarea limbii o călătorie captivantă și accesibilă, transformându-te în vorbitor fluent și sigur în sine.</span></h2>
                    </div>
                </div>
            </div>
            <img src={whyImage} alt=''/>
           </div>
        </div>
    )
}
export default WhyBlock; 

