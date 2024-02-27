import React, { useState } from "react";
import './styles.css';
import expereanceImage from '../../assets/images/expereanceImage.png'
import smartstartkidsacademyImage from '../../assets/images/smartstartkidsacademyImage.png'
import nextlanguagecentreImage from '../../assets/images/nextlanguagecentreImage.png'
import ipltImage from '../../assets/images/ipltImage.png'
import fantasticenglishImage from '../../assets/images/fantasticenglishImage.png'
import ritaenglezaImage from '../../assets/images/ritaenglezaImage.png'
import oratoricaImage from '../../assets/images/oratoricaImage.png'
import expereancelineImage from '../../assets/images/expereancelineImage.png'

const ExpereanceBlock = () => {
    const [loading, setLoading] = useState(true);

    return(
        <div className="expereanceBlock">
            <div className="expereanceContent">
                <div className="expereanceImage">
                    {loading && <div className="skeletonExpereance">
                        <div></div>
                    </div> }
                    <img src={expereanceImage} onLoad={() => setLoading(false)} alt='' width={500} height={500}/>  
                </div>
                <div className="expereanceTextBlock">
                    <h1>Experiență</h1>
                   
                    <div className="expereanceTextRow"><img src={oratoricaImage} alt=''/> <p>Oratorica  <br/> <span>ESL Teacher / BAC Instructor</span></p></div>
                    <div className="expereanceTextRow"><img src={ritaenglezaImage} alt=''/> <p>Rita Engleza <br/> <span>Online Courses <br/> Lead Methodologist</span></p></div>
                    <div className="expereanceTextRow"><img src={fantasticenglishImage} alt=''/> <p>Fantastic English  <br/> <span>Head of International <br/> Exams Department</span></p></div>
                    <div className="expereanceTextRow"><img src={fantasticenglishImage} alt=''/> <p>Fantastic English  <br/> <span>TOEFL ibt / FCE Instructor</span></p></div>
                    <div className="expereanceTextRow"><img src={ipltImage} alt='' width={50}/> <p>IPLT «A. Puskin» <br/> <span>English Teacher</span></p></div>
                    <div className="expereanceTextRow"><img src={nextlanguagecentreImage} alt=''/> <p>Next Language Centre  <br/> <span>ESL Teacher</span></p></div>
                    <div className="expereanceTextRow"><img src={smartstartkidsacademyImage} alt=''/> <p>Smart Start Kids Academy <br/> <span>EFL Teacher</span></p></div>
                    
                    <img src={expereancelineImage} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default ExpereanceBlock;
