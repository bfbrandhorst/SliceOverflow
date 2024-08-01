import React from 'react'
import '../css/Home.css'
import {HeroBanner} from '../Component/HeroBanner'

const Home =()=>{
    return (
        <div className=''>
    <HeroBanner>
        <div className='relative w-full h-[100px]'>
            <div className='relative'>
    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" w-full pointer-events-none bg-base-100 rotate-180 relative"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            fill-opacity="1"
            className=""
            d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,181.3C672,171,768,117,864,101.3C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className='absolute left-0 bottom-[50%] translate-y-1/2 transform z-[1] w-full text-center'>
        <p className='logo text-7xl'> Slice Overflow </p> <br></br> <p> Byte into happiness </p>
</div>
    <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className=" w-full pointer-events-none bg-base-100 relative"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFFFFF"
            fill-opacity="1"
            className=""
            d="M0,128L48,128C96,128,192,128,288,144C384,160,480,192,576,181.3C672,171,768,117,864,101.3C960,85,1056,107,1152,128C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        </div>
        </div>
    <section className='flex flex-row justify-around items-center w-full absolute bottom-0'>
                <div className='bg-white rounded-xl p-9 px-9 m-6'>
                    <h2>Albuquerque, NM</h2>
                    <p>500 Artisan Lane</p>
                    <p>SUN - THURS: 11:00 AM- 9:00 PM </p>
                    <p>FRI & SAT: 11:00 AM - 11:00 PM</p>
                    <button className='rounded-full bg-black text-white p-4 mt-4'>Order Online</button>
                </div>
                <div className='bg-white rounded-xl p-9 px-9 m-6'>
                    <h2>Dallas, TX</h2>
                    <p>800 Ryan Street</p>
                    <p>SUN - THURS: 11:00 AM- 9:00 PM </p>
                    <p>FRI & SAT: 11:00 AM - 11:00 PM</p>
                    <button className='rounded-full bg-black text-white p-4 mt-4'>Order Online</button>
                </div>
            </section>
    </HeroBanner>
        
        </div>
    )
}


export default Home