import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BiLogoGmail, BiLogoLinkedin, BiLogoGithub, BiLogoInstagram } from 'react-icons/bi'
import img1 from '../img/1a.png'

const Header = () => {
    const [showGif, setShowGif] = useState(true)
    const timeoutRef = useRef(null)

    useEffect(() => {
        if (showGif) {
            timeoutRef.current = setTimeout(() => {
                setShowGif(false)
            }, 4000) // Show the GIF for 4 seconds
        }

        return () => clearTimeout(timeoutRef.current) // Clear the timeout when the component unmounts
    }, [showGif])

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current)
        setShowGif(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowGif(false)
        }, 4000) // Show the GIF for 4 seconds
    }

    return (
        <>
            <div className=' bg-[#2699fb] w-[100%] h-[100vh] flex flex-col md:flex-row items-center justify-around px-[30px] sm:px-[90px] py-20 '>
                <div className='max-w-[1250px]  font-abc '>
                    <div className='text-white text-[60px] sm:text-[80px] lg:text-[100px]  leading-[60px] sm:leading-[85px] tracking-[-0.43px]'>Hi, I am <br />Sahil Sharma</div>
                    <div className='text-white text-[25px] sm:text-[40px] lg:text-[50px] mt-4'>Web Developer</div>
                    <div className="flex py-3 px-3  ">
                        <a href="mailto:sahilsharmarksh@gmail.com">
                            <BiLogoGmail className='text-white w-[25px] h-[25px] mx-1 hover:text-black ' />
                        </a>
                        <a href="https://www.linkedin.com/in/sahil-sharma-47824722b">
                            <BiLogoLinkedin className='text-white w-[25px] h-[25px] mx-1 hover:text-black' />
                        </a>
                        <a href="https://github.com/SahilSharma2911">
                            <BiLogoGithub className='text-white w-[25px] h-[25px]  mx-1 hover:text-black' />
                        </a>
                        <a href="">
                            <BiLogoInstagram className='text-white w-[25px] h-[25px] mx-1 hover:text-black' />
                        </a>
                    </div>
                </div>
                <div className="rounded-tl-[120px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[100px] bg-white p-10 h-[300px] w-[290px]" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {showGif ? (
                        <iframe src="https://giphy.com/embed/26u4cqVR8dsmedTJ6" className='h-[200px] w-[200px]' />
                    ) : (
                        <img src={img1} alt="" className='h-[200px] w-[200px]' />
                    )}
                </div>


            </div>
        </>
    )
}

export default Header
