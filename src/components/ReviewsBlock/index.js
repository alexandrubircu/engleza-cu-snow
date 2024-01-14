import React from "react";
import './styles.css';
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ReviewsIcon from '../../assets/images/reviewIcon.png'
import reviewsuserImage from '../../assets/images/reviewsuserImage.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`testbutton next ${className}`}
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
        className={`testbutton prev ${className}`}
        style={{ ...style }}
        onClick={onClick}
      >
        <p>&lt;</p>
      </div>
    );
  }
  
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
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
      };
    return (
        <div className="reviews">
            <div className="reviewsContetn">
                <div className="reviewsTitle"><h1>Recenzii</h1></div>
                <div className="reviewsSlider">
                    <div className="reviewsSliderview">
                        <Slider {...settings}>
                            <div className="reviewsTiket">
                                <div className="reviewsTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CoursesA1-A2"><button className="reviewsuserButton">CoursesA1-A2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CoursesB1-B2"><button className="reviewsuserButton">CoursesB1-B2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CoursesC1-C2"><button className="reviewsuserButton">CoursesC1-C2</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/ToeflCourse"><button className="reviewsuserButton">ToeflCourse</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/CambridgeCourse"><button className="reviewsuserButton">CambridgeCourse</button></Link>
                                </div>
                            </div>
                            <div className="reviewsTiket">
                                <div className="reviewsTiketContent">
                                    <div className="reviewsTiketTopContent">
                                        <img src={ReviewsIcon} alt=''/>
                                        <img src={reviewsuserImage} alt=''/>
                                    </div>
                                    <p>
                                        Au fost 5 ore productive, care mi-au dezvoltat abilitätile de a scrie si intelege ce e cu adevarat important la sesiunea de bac. Datorita reperelor, sfaturilor si lucrurilor NOl spuse, sunt sigura că voi lua nota pe care mi-o doresc.
                                        Multumesc!
                                    </p>
                                    <Link to="/IndividualCourse"><button className="reviewsuserButton">CURSUL INDIVIDUAL</button></Link>
                                </div>
                            </div>
                            
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ReviewsBlock



