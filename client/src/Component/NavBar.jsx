import '../css/Home.css'
import { useStoreContext } from '../utils/context'

const NavBar = ()=> {
    const [state, dispatch] = useStoreContext()

    return (
        <section className='homeBanner'>
                <div className='Heading'>
                <h1 >Slice Overflow</h1>
                <ul className= 'Nav'>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Login or Signup</li>
                    <li>Checkout</li>
                    <li>{state.cart.length}</li>
                </ul>
                </div>
                
            </section>
    )
}

export default NavBar