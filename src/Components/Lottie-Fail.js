import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web'

const LottieFail = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData: require('../fail-animation.json')
        })
    },[])
  return <div className="lottie-container" style={{width:'300px'}}ref={container}></div>;
};

export default LottieFail;
