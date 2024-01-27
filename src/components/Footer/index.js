import React from "react";
import './styles.css'
import footerfacebookImage from '../../assets/images/footerfacebookImage.png'
import footerinstagramImage from '../../assets/images/footerinstagramImage.png'
import footertiktokImage from '../../assets/images/footertiktokImage.png'
import footeryoutubeImage from '../../assets/images/footeryoutubeImage.png'


const Footer = () => {
   
    return(
        <div className="footer">
           <div className="footerContent">
            <div className="leftFooterLinks">
                <a href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer"><img src={footerfacebookImage} alt=''/></a>  
                <a href="https://www.instagram.com/english_with_snow/" target="_blank" rel="noreferrer"><img src={footerinstagramImage} alt=''/></a>
                <a href="https://www.tiktok.com/@engleza_cu_snow" target="_blank" rel="noreferrer"><img src={footertiktokImage} alt='' width={25} height={25}/></a>
                <a href="https://www.youtube.com/channel/UCgxXVAjWnAXg-BpXZbF9b_A" target="_blank" rel="noreferrer"><img src={footeryoutubeImage} alt='' width={25} height={25}/></a>
            </div>
            <div className="bottomFooterBlock">
                <p>© 2024 Snow. Toate drepturile rezervate.</p>
            </div>
           </div>
        </div>
    )
}
export default Footer; 
 {/* <div className="topFooterBlock">
                <div className="leftFooterLinks">
                    <a href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer"><img src={footerfacebookImage} alt=''/></a>  
                    <a href="https://www.instagram.com/english_with_snow/" target="_blank" rel="noreferrer"><img src={footerinstagramImage} alt=''/></a>
                </div>
                
                <div className="rightFooterLinks">
                    <a href="https://www.tiktok.com/@engleza_cu_snow" target="_blank" rel="noreferrer"><img src={footertiktokImage} alt='' width={25} height={25}/></a>
                    <a href="https://www.youtube.com/channel/UCgxXVAjWnAXg-BpXZbF9b_A" target="_blank" rel="noreferrer"><img src={footeryoutubeImage} alt='' width={25} height={25}/></a>
                </div>
            </div>
            <div className="bottomFooterBlock">
                <p>© 2024 Snow. Toate drepturile rezervate.</p>
            </div> */}