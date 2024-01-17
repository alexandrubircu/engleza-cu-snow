import React from "react";
import './styles.css';
import mainAvatar from '../../assets/images/mainAvatar.png'
import mainImage from '../../assets/images/mainImage.png'
import mainFaceboock from '../../assets/images/mainFaceboock.png'
import mainInstagram from '../../assets/images/mainInstagram.png'
import mainTiktok from '../../assets/images/mainTiktok.png'
import mainYoutube from '../../assets/images/mainYoutube.png'



const MainBlock = () => {
    return (
        <div className="mainBlock" id="main">
            <div className="mainBlockContent">
                <div className="leftBlock">
                    <div className="leftBlockContent">
                        <img src={mainAvatar} alt='' width={200} height={200} />
                        <h1>Engleza cu Snow</h1> 
                        {/* mobile */}
                            <div className="webLinKsMobile">
                                <a href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer"><img src={mainFaceboock} alt='' width={50} height={50}/></a>
                                <a href="https://www.instagram.com/english_with_snow/" target="_blank" rel="noreferrer"><img src={mainInstagram} alt='' width={50} height={50}/></a>
                                <a href="https://www.tiktok.com/@engleza_cu_snow" target="_blank" rel="noreferrer"><img src={mainTiktok} alt='' width={50} height={50}/></a>
                                <a href="https://www.youtube.com/channel/UCgxXVAjWnAXg-BpXZbF9b_A" target="_blank" rel="noreferrer"><img src={mainYoutube} alt='' width={50} height={50}/></a>
                            </div>
                        {/* mobile */}
                        <p>Profesoară de 14 ani cu peste 1 000 de studenți care deja vorbesc engleză cu mine și susțin examene internaționale și naționale.</p>
                        <a href="#courses"><button className="mainButton"><p>Despre lecții</p></button></a>
                    </div>
                </div>
                <div className="rightBlock">
                    <div className="rightContent">
                    <img src={mainImage} alt='' width={760} height={1000}/>
                        <div className="webLinKs">
                            <a href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer"><img src={mainFaceboock} alt='' width={50} height={50}/></a>
                            <a href="https://www.instagram.com/english_with_snow/" target="_blank" rel="noreferrer"><img src={mainInstagram} alt='' width={50} height={50}/></a>
                            <a href="https://www.tiktok.com/@engleza_cu_snow" target="_blank" rel="noreferrer"><img src={mainTiktok} alt='' width={50} height={50}/></a>
                            <a href="https://www.youtube.com/channel/UCgxXVAjWnAXg-BpXZbF9b_A" target="_blank" rel="noreferrer"><img src={mainYoutube} alt='' width={50} height={50}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainBlock