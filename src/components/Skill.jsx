import React, { useEffect, useRef, useState } from 'react';
import img_html from '../img/html-5.png'
import css_html from '../img/css-3.png'
import js_html from '../img/js.png'
import tailwind_html from '../img/tailwind.png'
import img_nodejs from '../img/nodejs.png'
import img_expressjs from '../img/express.png'
import img_mongo from '../img/mongodb.png'
import img_react from '../img/react.png'
import img_c from '../img/c.png'
import img_c1 from '../img/c1.png'
import img_python from '../img/python.png'
import { Skills } from "../data"

const Skill = () => {
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
        <div className='pt-[60px] '>
            <h1
                ref={h1Ref}
                className={`text-[#2699fb] px-[40px] sm:px-[100px] md:px-[200px]  text-[40px]  font-abc ${animate ? 'animate-slide-from-left' : ''}`}
            >
                My Skills
            </h1>
            <div className="flex flex-wrap px-[40px] sm:px-[100px] md:px-[200px] mt-6">

                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_html} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>HTML</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={css_html} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>CSS</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={js_html} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>JavaScript</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={tailwind_html} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>Tailwind CSS</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_nodejs} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>NodeJS</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_expressjs} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>Express</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_mongo} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>Mongo DB</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_react} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>React</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_c} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>C programming</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_c1} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>C++ programming</div>
                </div>
                <div className='mx-4 sm:mx-10 my-4'>
                    <img src={img_python} alt="" className='h-[60px] md:h-[100px] w-[60px] md:w-[100px]' />
                    <div className='font-bold text-gray-600 text-center text-[10px] sm:text-[14px]'>Python programming</div>
                </div>

            </div>
        </div>
    )
}

export default Skill
