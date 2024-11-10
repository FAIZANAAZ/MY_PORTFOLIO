import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Button from './Button';

function HeroSection() {
  return (
    <>
      <section className='bg-pink-300 w-full text-center pt-[7.5rem]'>
       <div className='bg-black py-2'>
       <p className='text-[2rem]'>Hey! I'm <span className='text-yellow-400'>FAIZA NAAZ</span></p>

<p className='text-[2rem]'><span className='text-yellow-400'>I</span>'m <span className='text-yellow-400'>A F</span>ront <span className='text-yellow-400'>E</span>nd <span className='text-yellow-400'>W</span>eb <span className='text-yellow-400'>D</span>eveloper</p>

<p className='mt-[1.25rem] mb-[2rem] text-[1.125rem] '> I specialize in creating interactive user interfaces for websites and applications using <span className='text-yellow-400'>React JS</span> and <span className='text-yellow-400'>Next.Js</span><br />I love the front end development.</p>

<Button textName={"Hire Me"}/>

       </div>

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-yellow-text-yellow-400 rounded-full'>
          <FaFacebookF  size={30} color='black' className='cursor-pointer'/>
          <FaXTwitter size={30} color='black' className='cursor-pointer'/>
          <FaInstagram size={30} color='black' className='cursor-pointer'/>
          <IoLogoWhatsapp size={30} color='black' className='cursor-pointer'/>
          <FaTelegramPlane size={30} color='black' className='cursor-pointer'/>
          </div>

      </section>
    </>
  )
}

export default HeroSection