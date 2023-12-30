import React, { useEffect, useRef, useState } from 'react';
import swiggyimg from '../img/swiggy.png'
import weatherimg from '../img/weather.png'
import socialimg from '../img/social.png'
import mapimg from '../img/map.png'
import { BsGlobe, BsGithub } from 'react-icons/bs'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Project() {
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
    <div className='py-[80px]'>
      <h1
        ref={h1Ref}
        className={`text-[#2699fb] px-[40px] sm:px-[100px] md:px-[200px]  text-[40px] font-abc ${animate ? 'animate-slide-from-left' : ''}`}
      >
        Projects
      </h1>

      <div className="flex flex-col sm:flex-row px-[40px] sm:px-[100px] md:px-[200px] mt-6 text-gray-600 w-[100vw]  m-auto p-5 ">
        <div className=" w-[80vw]">
          <img src={socialimg} alt="" className='drop-shadow-md' />
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-10 flex flex-col w-full">
          <h1 className='text-[20px] font-bold'>ST Social</h1>
          <p className='mt-5'>ST Social is a social media web application built using the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO for real-time chat functionality. Users can register, create profiles, and share photos and videos as posts. They can like and comment on posts, fostering interaction and engagement. </p>
          <div className='flex mt-12 ml-12'>
            {/* <a href="" className="hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"> <BsGlobe className="h-[25px] w-[25px]" /> Website</div>

            </a> */}
            <a href="https://github.com/SahilSharma2911/socialmedia" className=" hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"><BsGithub className='h-[25px] w-[25px]' /> Github</div>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-[50px] mx-[15vw]" />
      <div className="flex flex-col sm:flex-row px-[40px] sm:px-[100px] md:px-[200px] mt-6 text-gray-600 w-[100vw]  m-auto p-5 ">
        <div className=" w-[80vw]">
          <img src={mapimg } alt="" className='drop-shadow-md' />
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-10 flex flex-col w-full">
          <h1 className='text-[20px] font-bold'>ST Social</h1>
          <p className='mt-5'>Created a project, which is a dynamic web application built on the MERN (MongoDB, Express.js, React, Node.js) stack, offering a seamless experience for mapping and pinning locations using the powerful MapBox API. </p>
          <div className='flex mt-12 ml-12'>
            {/* <a href="" className="hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"> <BsGlobe className="h-[25px] w-[25px]" /> Website</div>

            </a> */}
            <a href="https://github.com/SahilSharma2911/mapPin" className=" hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"><BsGithub className='h-[25px] w-[25px]' /> Github</div>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-[50px] mx-[15vw]" />
      <div className="flex flex-col sm:flex-row px-[40px] sm:px-[100px] md:px-[200px] mt-6 text-gray-600 w-[100vw]  m-auto p-5 ">
        <div className=" w-[80vw]">
          <img src={swiggyimg} alt="" className='drop-shadow-md' />
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-10 flex flex-col w-full">
          <h1 className='text-[20px] font-bold'>Swiggy Clone</h1>
          <p className='mt-5'>Creating a fully responsive landing page for Swiggy, a popular food delivery service, based on the Bangalore (Bengaluru) theme using React is a comprehensive project. </p>
          <div className='flex mt-12 ml-12'>
          <a href="https://swiggy-clone-react-git-main-sahilsharma2911.vercel.app" className="hover:underline">
  <div className="mx-8 flex flex-col justify-center items-center"> <BsGlobe className="h-[25px] w-[25px]" /> Website</div>
</a>

            <a href="https://github.com/SahilSharma2911/Swiggy-clone-react" className=" hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"><BsGithub className='h-[25px] w-[25px]' /> Github</div>
            </a>
          </div>
        </div>
      </div>
      <hr className="my-[50px] mx-[15vw]" />
      <div className="flex flex-col sm:flex-row px-[40px] sm:px-[100px] md:px-[200px] mt-6 text-gray-600 w-[100vw]  m-auto p-5 ">
        <div className=" w-[80vw]">
          <img src={weatherimg} alt="" className='drop-shadow-md' />
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-10 flex flex-col w-full">
          <h1 className='text-[20px] font-bold'>Weather App</h1>
          <p className='mt-5'>Weatherly is a user-friendly web application that provides real-time weather information for any location worldwide. Powered by the OpenWeather API, this sleek and intuitive frontend project offers a seamless way to access accurate weather data, no matter where you are or where you want to know the forecast. </p>
          <div className='flex mt-12 ml-12'>
            <a href="https://sahilsharma2911.github.io/Weather-app/" className="hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"> <BsGlobe className="h-[25px] w-[25px]" /> Website</div>

            </a>
            <a href="https://github.com/SahilSharma2911/Weather-app" className=" hover:underline">
              <div className="mx-8 flex flex-col justify-center items-center"><BsGithub className='h-[25px] w-[25px]' /> Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
