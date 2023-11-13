import React, { useEffect, useRef, useState } from 'react';

const About = () => {
    const [animate, setAnimate] = useState(false);
    const h1Ref = useRef(null);
    
    
    useEffect(() => {
        const handleScroll = () => {
            const h1Element = h1Ref.current;
            const rect = h1Element.getBoundingClientRect();
            const scrollPosition = document.documentElement.scrollTop;

            if (scrollPosition + window.innerHeight >= rect.top + scrollPosition) {
                setAnimate(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='pt-[100px]'>
            <h1
                ref={h1Ref}
                className={`text-[#2699fb] px-[40px] sm:px-[100px] md:px-[200px]  text-[40px] font-abc ${animate ? 'animate-slide-from-left' : ''}`}
            >
                About me
            </h1>
            <p className='px-[40px] sm:px-[100px] md:px-[200px] mt-6 text-gray-600'>
                I am a Full-Stack Web and Software developer currently in my penultimate year of pursuing B.Tech in Computer Science & Engineering. Driven by a zeal for everything technology, I am more than willing to take on new challenges and learn wherever I get the chance. With this frame of mind, over time I've cultivated expertise in front-end and back-end technologies, allowing me to design and build robust, interactive web solutions. Well-versed in Hindi and English, I understand the importance of as well as possess good communication skills and adaptability according to any work scenario, which makes me a great team player.
            </p>
        </div>
    );
};

export default About;
