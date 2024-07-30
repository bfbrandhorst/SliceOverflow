import '../css/Home.css'
import {Link} from 'react-router-dom'

const NavBar = ()=> {
    return (
        <section className='homeBanner'>
                <div className='Heading'>
                <h1 >Slice Overflow</h1>
                <ul className= 'Nav'>
                    <li><Link to='/' className='Link'>Home</Link></li>
                    <li><Link to='/menu' className='Link'>Menu</Link></li>
                    <li><Link to='/loginSignup' className='Link'>Login or Signup</Link></li>
                    <li><Link to='/cartCheckout' className='Link'>Checkout</Link></li>
                </ul>
                
                </div>
            
            </section>
    )
}

export default NavBar;
