import React, { useState } from "react";
import './styles.css'
import whyImage from "../../assets/images/whyImage.png"

const WhyBlock = () => {
    const [loading, setLoading] = useState(true);

    return(
        <div className="whyBlock">
           <div className="whyBlockContent">
            <div className="whyBlockText">
                <h1>De ce sa alegi cursurile cu <span className="snow">Snow</span></h1>
                <div className="whyBlockContentRowPink">
                    <div className="whyBlockTextList">
                        <h2>Cursurile au loc online pe Zoom<br/><span>Cursurile au loc online, pe Zoom, ceea ce înseamnă că nu trebuie să te deplasezi nicăieri. Toate orele live se înregistrează și după lecție mai poți viziona ora ca să asimila materia mai bine</span></h2>
                    </div>
                </div>
                <div className="whyBlockContentRowWhite">
                    <div className="whyBlockTextList">
                        <h2>Exersarea comunicării în situații reale<br/><span>La lecțiile mele vorbești engleza la FIECARE lecție. Plus la asta, în afară de gramatică și vocabular, primești și sarcini de vorbire pentru acasă.</span></h2>
                    </div>
                </div>
                <div className="whyBlockContentRowYellow">
                    <div className="whyBlockTextList">
                        <h2>Feedback personalizat<br/><span>Primești feedback și recomandări personalizate după teste și exerciții de vorbire pentru a întări aspectele de care anume tu ai nevoie.</span></h2>
                    </div>
                </div>
                <div className="whyBlockContentRowWhite">
                    <div className="whyBlockTextList">
                        <h2>Certificat de absolvire<br/><span>La finalizarea cursurilor primești diplomă care confirmă finalizarea cu succes a cursului ales.</span></h2>
                    </div>
                </div>
            </div>
            <div className="whyBlockImg">
                {loading && <div className="skeletonWhy">
                    <div></div>
                </div> }
               <img src={whyImage} onLoad={() => setLoading(false)} alt=''/> 
            </div>
           </div>
        </div>
    )
}
export default WhyBlock; 

