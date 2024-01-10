import React from "react";
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
    return(
        <div className="expereanceBlock">
            <div className="expereanceLeftBlock">
                <img src={expereanceImage} alt='' width={500} height={500}/>
            </div>
            <div className="expereanceRightBlock">
                <div className="expereanceRightContent">
                    <div className="expereanceRightContentColum">
                        <div className="expereanceRightTitle"><h1>Experiență</h1></div>
                        <img src={expereancelineImage} alt=''/>
                        <div className="expereanceRightContentRow"><img src={smartstartkidsacademyImage} alt='' width={50} height={50}/> <p>Smart Start Kids Academy <br/> <span className="bold">EFL Teacher</span></p></div>
                        <div className="expereanceRightContentRow"><img src={nextlanguagecentreImage} alt='' width={50} height={50}/> <p>Next Language Centre  <br/> <span className="bold">ESL Teacher</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ipltImage} alt='' width={50} height={50}/> <p>IPLT «A. Puskin» <br/> <span className="bold">English Teacher</span></p></div>
                        <div className="expereanceRightContentRow"><img src={fantasticenglishImage} alt='' width={50} height={50}/> <p>Fantastic English  <br/> <span className="bold">TOEFL ibt / FCE Instructor</span></p></div>
                        <div className="expereanceRightContentRow"><img src={fantasticenglishImage} alt='' width={50} height={50}/> <p>Fantastic English  <br/> <span className="bold">Head of International Exams Department</span></p></div>
                        <div className="expereanceRightContentRow"><img src={ritaenglezaImage} alt='' width={50} height={50}/> <p>Rita Engleza <br/> <span className="bold">Online Courses Lead Methodologist</span></p></div>
                        <div className="expereanceRightContentRow"><img src={oratoricaImage} alt='' width={50} height={50}/> <p>Oratorica  <br/> <span className="bold">ESL Teacher / BAC Instructor</span></p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpereanceBlock;