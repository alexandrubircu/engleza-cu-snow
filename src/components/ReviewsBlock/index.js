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
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CoursesA1-A2"><button className="reviewsuserPinkButton">CoursesA1-A2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsPinkTiketContent">
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
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CoursesA1-A2"><button className="reviewsuserPinkButton">CoursesA1-A2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsPinkTiketContent">
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

                        </Slider>
                    </div>
            </div>
        </div>
    )
}
export default ReviewsBlock



