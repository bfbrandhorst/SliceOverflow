import React from 'react'
import '../css/Home.css'
import HomePic2 from '../assets/HomePic2.jpg'
import {HeroBanner} from '../Component/HeroBanner'

const Home =()=>{
    return (
        <>
    <HeroBanner />
            <section className='MockOrder'>
                <div className='location'>
                    <h2>Albuquerque, NM</h2>
                    <p>500 Artisan Lane</p>
                    <p>HOURS: 11:00 AM - 10:00 PM</p>
                    <button className='OrderNow rounded-full bg-black text-white p-4 mt-4'>Order Online</button>
                </div>
                <div className='location'>
                    <h2>Dallas, TX</h2>
                    <p>800 Ryan Street</p>
                    <p>SUN - THURS: 11:00 AM- 9:00 PM </p>
                    <p>FRI & SAT: 11:00 AM - 11:00 PM</p>
                    <button className='OrderNow'>Order Online</button>
                </div>
            </section>
        
        </>
    )
}


export default Home