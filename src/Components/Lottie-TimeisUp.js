import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web'

const LottieTimeisUp = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData: require('../timeisup-animation.json')
        })
    },[])
  return <div className="lottie-container" style={{width:'450px'}}ref={container}></div>;
};

export default LottieTimeisUp;