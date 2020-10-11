import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web'

const LottieWin = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData: require('../celebration-animation.json')
        })
    },[])
  return <div className="lottie-container" style={{width:'400px'}}ref={container}></div>;
};

export default LottieWin;
