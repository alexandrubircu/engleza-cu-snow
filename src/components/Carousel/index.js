import React from "react";
import './styles.css'
import feedback1 from '../../assets/images/feedback1.png'
import feedback2 from '../../assets/images/feedback2.png'
import feedback3 from '../../assets/images/feedback3.png'
import feedback4 from '../../assets/images/feedback4.png'

import Slider from "react-slick";

const Carousel = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return(
        <div className="phoneBlock">
            <Slider {...settings}>
                <div className="phoneBackGround">
                    <img src={feedback1} alt=''/>
                </div>
                <div className="phoneBackGround">
                    <img src={feedback2} alt=''/>
                </div>
                <div className="phoneBackGround">
                    <img src={feedback3} alt=''/>
                </div>
                <div className="phoneBackGround">
                    <img src={feedback4} alt=''/>
                </div>
            </Slider>
        </div>
    )
}
export default Carousel;