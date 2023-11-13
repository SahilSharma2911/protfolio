import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_knrozxy', 'template_wl6otpl', form.current, 'iPW5m9UNBLsKVf9Jj')
      .then((result) => {
        console.log(result.text);
        // Reload the webpage after email is sent
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className='bg-[#2699fb] w-full h-screen flex flex-col items-center px-10 justify-center'>
        <h1 className='text-white text-6xl mb-10 font-abc mt-12'>Contact me</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col px-[0vw] sm:px-[20vw]  w-[80vw] '>
          <label className='my-2 text-[20px] font-qwe text-gray-800 '>Name</label>
          <input type="text" name="from_name" className='focus:outline-none rounded-[6px] p-2'/>
          <label className='my-2 text-[20px] font-qwe text-gray-800 '>Email</label>
          <input type="email" name="from_email" className='focus:outline-none rounded-[6px] p-2' />
          <label className='my-2 text-[20px] font-qwe text-gray-800 '>Message</label>
          <textarea name="message" className='focus:outline-none rounded-[6px] p-2' />
          <input type="submit" value="Send" className='my-10 cursor-pointer text-white text-[25px] font-qwe border w-[20vw] m-auto rounded-[6px]' />
        </form>
      </div>
    </>
  );
}
