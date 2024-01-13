import React from "react";
import './styles.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ReviewsIcon from '../../assets/images/reviewIcon.png'
import reviewsuserImage from '../../assets/images/reviewsuserImage.png'
const ReviewsBlock = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 6000,
        adaptiveHeight: false,
      };
    return (
        <div className="reviews">
            
            <div className="reviewsBlock">
                <div className="reviewsCarowsel">
                    <div className="reviewstitleBLock">
                        <h1>Recenzii</h1>
                    </div>
                    <Slider {...settings}>
                        <div className="reviewstiketBlock">
                            <div className="reviewstiketContent">
                                <div className="reviewsImage">
                                    <img src={ReviewsIcon} alt=''/>
                                </div>
                                <div className="reviewsuserImage">
                                    <img src={reviewsuserImage} alt=''/>
                                </div>
                                <div className="reviewsText">
                                    <p>
                                        Salut. Deci pot sa spun ca a fost cel mai frumos inceput pentru o limba noua care pe alocuri cunoscuta. Cu doamna Snejana
                                        a fot o legatura instanta, ea dupã parerea mea este mai experimentatã profesoara care stie cum 'sa explice si sa ajungã sa înteleagã fiecare elev orice
                                        tema necunoscut. Abia astept
                                        următorul nivel
                                    </p>
                                </div>
                                <div className="reviewsButtons">
                                <Link to="/CoursesA1-A2"><button className="reviewsuserButton">CoursesA1-A2</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="reviewstiketBlock">
                            <div className="reviewstiketContent">
                                <div className="reviewsImage">
                                    <img src={ReviewsIcon} alt=''/>
                                </div>
                                <div className="reviewsuserImage">
                                    <img src={reviewsuserImage} alt=''/>
                                </div>
                                <div className="reviewsText">
                                    <p>
                                    Hello!!
                                    Find ca primul meu curs de limba englezä, nu m am asteptat ca o sa fie atât de eficient pentru mine. Chiar am invăt multe lucruri noi. Mi-a pläcut absolut totul, in special modul de predare, este superb!
                                    Multumesc mult pentru rabdare!❤️
                                    </p>
                                </div>
                                <div className="reviewsButtons">
                                <Link to="/CoursesB1-B2"><button className="reviewsuserButton">CoursesB1-B2</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="reviewstiketBlock">
                            <div className="reviewstiketContent">
                                <div className="reviewsImage">
                                    <img src={ReviewsIcon} alt=''/>
                                </div>
                                <div className="reviewsuserImage">
                                    <img src={reviewsuserImage} alt=''/>
                                </div>
                                <div className="reviewsText">
                                    <p>
                                    Sunt foarte incântat de rezultatele obtinute in timpul cursului, am trecut un pic peste bariera de a vorbi in englezã si am invätat sa formulez corect si coerent gândurile care le am.
                                    Multumesc pentru timpul acordat
                                    </p>
                                </div>
                                <div className="reviewsButtons">
                                <Link to="/CoursesC1-C2"><button className="reviewsuserButton">CoursesC1-C2</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="reviewstiketBlock">
                            <div className="reviewstiketContent">
                                <div className="reviewsImage">
                                    <img src={ReviewsIcon} alt=''/>
                                </div>
                                <div className="reviewsuserImage">
                                    <img src={reviewsuserImage} alt=''/>
                                </div>
                                <div className="reviewsText">
                                    <p>
                                    Mi-a pläcut foarte mult, mai ales inceput lectilor când trebuia sã vorbim in grup
                                    Am invätat cum corect sa folosesc timpurile, cuvinte si
                                    fraze noi, am invătat cum vorbesc nativii.
                                    </p>
                                </div>
                                <div className="reviewsButtons">
                                <Link to="/ToeflCourse"><button className="reviewsuserButton">ToeflCourse</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="reviewstiketBlock">
                            <div className="reviewstiketContent">
                                <div className="reviewsImage">
                                    <img src={ReviewsIcon} alt=''/>
                                </div>
                                <div className="reviewsuserImage">
                                    <img src={reviewsuserImage} alt=''/>
                                </div>
                                <div className="reviewsText">
                                    <p>
                                    Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                    Multumesc!
                                    </p>
                                </div>
                                <div className="reviewsButtons">
                                <Link to="/CambridgeCourse"><button className="reviewsuserButton">CambridgeCourse</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="reviewstiketBlock">
                            <div className="reviewstiketContent">
                                <div className="reviewsImage">
                                    <img src={ReviewsIcon} alt=''/>
                                </div>
                                <div className="reviewsuserImage">
                                    <img src={reviewsuserImage} alt=''/>
                                </div>
                                <div className="reviewsText">
                                    <p>
                                    🤓How to learn English speaking at home? 👍Good question!!! The answer is not so difficult. The person who can answer is 👩‍🏫
                                    Engleza cu Snow. The best teacher I've ever had, an excellent and exciting platform for lessons and assignments that develop you! And the main thing I did not mention is that the topics are current and diverse. I challenge you to try!
                                    </p>
                                </div>
                                <div className="reviewsButtons">
                                <Link to="/IndividualCourse"><button className="reviewsuserButton">CURSUL INDIVIDUAL</button></Link>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default ReviewsBlock