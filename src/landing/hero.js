import React, {useRef, useEffect} from "react";
import lottie from "lottie-web";

function Hero() {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./bglottie.json')
        })
    }, [])
    return (
        <section className="relative">
            <div
                className="container flex flex-col-reverse gap-12 mt-14 lg:flex-row items-center justify-between lg:mt-20">
                <div
                    className="flex flex-col items-center lg:items-start sm:mb-20 sm:items-center lg:pl-20 text-center">

                    <p className="text-gray-100 lg:text-3xl sm:text-3xl lg:text-left lg:font-thin md:text-4xl md:mb-12 lg:mb-6">Hey!
                        I am
                        Vivian. </p>

                    <p className="text-gray-100 lg:text-2xl md:text-3xl sm:text-3xl lg:font-thin lg:text-left sm:mb-24 md:mb-12 lg:mb-6">
                        I build interactive websites that run across platforms &amp; devices</p>

                    <button type="button"
                       className="bg-portfolio-ppurple text-gray-300 rounded-2xl w-40 h-10 items-center text-center">Hire
                        Me</button>
                </div>

                <div className="lg:w-1/3 lg:h-1/3 md:w-1/2 h-1/2 sm:w-full sm:h-full" ref={container}/>
            </div>
        </section>

    )
}

export default Hero;