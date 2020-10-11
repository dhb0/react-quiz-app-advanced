import React, { useEffect, useRef } from "react";
import lottie from 'lottie-web'

const Lottie = () => {
    const container = useRef(null)
    useEffect(()=>{
        lottie.loadAnimation({
            container:container.current,
            renderer: 'svg',
            loop:true,
            autoplay:true,
            animationData: require('../success-animation.json')
        })
    },[])
  return <div className="lottie-container" style={{width:'400px'}}ref={container}></div>;
};

export default Lottie;
