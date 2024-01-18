import React from "react";
import './styles.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ReviewsIcon from '../../assets/images/reviewIcon.png'
import reviewsuserImage from '../../assets/images/reviewsuserImage.png'

const ReviewsBlock = () => {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 6000,
        adaptiveHeight: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            }
          ]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`nextButton next ${className}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <p>&gt;</p>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`prevButton prev ${className}`}
                style={{ ...style }}
                onClick={onClick}
            >
                <p>&lt;</p>
            </div>
        );
    }
    return (
        <div className="reviews">
            <div className="reviewsContetn">
                <div className="reviewsTitle"><h1>Recenzii</h1></div>
                    <div className="reviewsSliderview">
                        <Slider {...settings}>

                            <div className="reviewsTiket">
                                <div className="reviewsYellowTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CoursesA1-A2"><button className="reviewsuserWhiteButton">CoursesA1-A2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsWhiteTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Hello!!
                                        Find ca primul meu curs de limba englezä, nu m am asteptat ca o sa fie atât de eficient pentru mine. Chiar am invăt multe lucruri noi. Mi-a pläcut absolut totul, in special modul de predare, este superb!
                                        Multumesc mult pentru rabdare!❤️
                                    </p>
                                    <Link to="/CoursesB1-B2"><button className="reviewsuserPinkButton">CoursesB1-B2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsPinkTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Sunt foarte incântat de rezultatele obtinute in timpul cursului, am trecut un pic peste bariera de a vorbi in englezã si am invätat sa formulez corect si coerent gândurile care le am.
                                        Multumesc pentru timpul acordat
                                    </p>
                                    <Link to="/CoursesC1-C2"><button className="reviewsuserWhiteButton">CoursesC1-C2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsYellowTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Cursul mi sa pärut foarte bun am invatat gramatica care nu o stiam, sunt multumit de rezultate si vin si la cursul urmätor
                                    </p>
                                    <Link to="/ToeflCourse"><button className="reviewsuserWhiteButton">ToeflCourse</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsWhiteTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Mi-a pläcut foarte mult, mai ales inceput lectilor când trebuia sã vorbim in grup
                                        Am invätat cum corect sa folosesc timpurile, cuvinte si
                                        fraze noi, am invătat cum vorbesc nativii.
                                    </p>
                                    <Link to="/CambridgeCourse"><button className="reviewsuserPinkButton">CambridgeCourse</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsPinkTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        How to learn English speaking at home? 👍Good question!!! The answer is not so difficult. The person who can answer is 👩‍🏫
                                        Engleza cu Snow. The best teacher
                                    </p>
                                    <Link to="/IndividualCourse"><button className="reviewsuserWhiteButton">IndividualCourse</button></Link>
                                </div>
                            </div>

                        </Slider>
                    </div>
            </div>
        </div>
    )
}
export default ReviewsBlock



