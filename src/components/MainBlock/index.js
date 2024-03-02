import React, { useState, useRef, useEffect } from "react";
import './styles.css';
import mainAvatar from '../../assets/images/mainAvatar.png'
import mainImage from '../../assets/images/mainImage.jpeg'
import mainFaceboock from '../../assets/images/mainFaceboock.png'
import mainInstagram from '../../assets/images/mainInstagram.png'
import mainTiktok from '../../assets/images/mainTiktok.png'
import mainYoutube from '../../assets/images/mainYoutube.png'
import emojiEyes from '../../assets/images/emojiEyes.svg'
import emojiShushing from '../../assets/images/emojiShushing.svg'
import mainVideo from '../../assets/video/mainVideo.MOV'
const MainBlock = ({scrollToElement}) => {
    const [loading, setLoading] = useState(true);
    const[showBlock, setShowBlock] = useState(0);
    const [showEmoji, setShowEmoji] = useState(false); 

    const videoEl = useRef(null);

    useEffect(() => {
        const playVideo = async () => {
            try {
                await videoEl.current.play();
            } catch (error) {
                console.log('');
            }
        };
        if (videoEl.current){
            if (showBlock) {
                videoEl.current.currentTime = 0;
                playVideo();
            } else {
                videoEl.current.pause();
            }
        }
    }, [showBlock]);

    return (
        <div className="mainBlock" id="main">
            <div className="mainBlockContent">
                <div className="imgBlock">
                    {loading && <div className="skeleton">
                        <div></div>
                    </div> }
                    <video ref={videoEl} onEnded={() => setShowBlock(0)} style={showBlock ? {transform: 'scale(1)'} : {transform: "scale(0)"}} src={mainVideo}></video>
                    <img 
                        onLoad={() => setLoading(false)} 
                        src={mainImage}
                        alt=''/>
                </div>
                <div className="mainTextBlock">
                    <div className="avatarMbileBlock">
                        {loading && <div className="skeletonMobile">
                            <div></div>
                        </div> }
                        <img src={mainAvatar} onLoad={() => setLoading(false)} alt=''/>
                    </div>
                    <h1>Învață<br/>Engleza cu <span className="snow">Snow</span></h1>
                    <p>Deschide ușa spre  cunoștințe! Împreună cu Snow vei vorbi engleza ușor din prima lecție. Apăsă butonul de mai jos și începe călătoria ta.</p>
                    <div className="mainWebLinKs">
                        <a className="link" href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer" ><img src={mainFaceboock} alt=''/></a>
                        <a className="link" href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer" ><img src={mainInstagram} alt=''/></a>
                        <a className="link" href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer" ><img src={mainTiktok} alt=''/></a>
                        <a className="link" href="https://www.facebook.com/people/Engleza-cu-Snow/100089484220418/" target="_blank" rel="noreferrer" ><img src={mainYoutube} alt=''/></a>
                    </div>
                    <div className="mainButtonBlock">
                        <button className="mainButtonCourses" onClick={scrollToElement}>Vreu să învăț engleza</button>
                        
                        
                        <button className="mainButtonVideo" onClick={() => {
                            setShowBlock(!showBlock);
                            setShowEmoji(!showEmoji); 
                        }}>
                            <p>{showBlock ? "Închide-mă" : "Apasă-mă!"}</p>

                            <img src={showEmoji ? emojiShushing : emojiEyes} alt=''/>
                        </button>
                        {/* <button className="mainButtonVideo" onClick={() => setShowBlock(!showBlock)}>


                            <p>{showBlock ? "Închide-mă 🤫" : "Apasă-mă!"}</p>

                            <img src={emojiEyes} alt=''/>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainBlock

