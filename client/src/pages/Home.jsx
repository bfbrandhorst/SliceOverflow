import React from 'react'
import '../css/Home.css'
import {HeroBanner} from '../Component/HeroBanner'

const Home =()=>{
    return (
        <div className=''>
    <HeroBanner>
    <section className='flex flex-row justify-around items-center w-full'>
                <div className='bg-gray-300 rounded-xl p-4 px-9 m-4'>
                    <h2>Albuquerque, NM</h2>
                    <p>500 Artisan Lane</p>
                    <p>SUN - THURS: 11:00 AM- 9:00 PM </p>
                    <p>FRI & SAT: 11:00 AM - 11:00 PM</p>
                    <button className='rounded-full bg-black text-white p-4 mt-4'>Order Online</button>
                </div>
                <div className='bg-gray-300 rounded-xl p-4 px-9 m-4'>
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