import React from "react";
import './styles.css'
import whyImage from "../../assets/images/whyImage.png"

const WhyBlock = () => {
    return(
        <div className="whyBlock">
            <div className="whyblockLeft">
                <div className="whyblockleftText">
                    <h1>De ce sa alegi cursurile lui <span className="snow">Snow</span></h1>
                    <div className="whyBlockContentRowPink">
                        <div className="whyBlocContentTextRow">
                            <h2>Rămâi motivat</h2>
                            <li>Misiunea mea este să fac învățarea limbilor străine accesibilă tuturor</li>
                        </div>
                    </div>
                    <div className="whyBlockContentRowWhite">
                        <div className="whyBlocContentTextRow">
                            <h2>Descoperă oportunitatea cu Snow</h2>
                            <li>Cursurile de engleză transformă procesul de învățare într-o experiență deschisă și prietenoasă pentru toți cei dornici să-și dezvolte abilitățile lingvistice.</li>
                        </div>
                    </div>
                    <div className="whyBlockContentRowYellow">
                        <div className="whyBlocContentTextRow">
                            <h2>Rămâi inspirat cu Snow</h2>
                            <li>Cursurile de engleză sunt cheia spre reușita ta în această călătorie a cunoașterii.</li>
                        </div> 
                    </div>
                    <div className="whyBlockContentRowWhite">
                        <div className="whyBlocContentTextRow">
                            <h2>Alege excelența alături de Snow</h2>
                            <li>Cursurile de engleză sunt create pentru a face învățarea limbii o călătorie captivantă și accesibilă, transformându-te în vorbitor fluent și sigur în sine.</li>
                        </div>
                    </div>
                </div>
            </div>
            <div className="WhyblockRight">
                <img src={whyImage} alt=''/> 
            </div>
        </div>
    )
}
export default WhyBlock; 
