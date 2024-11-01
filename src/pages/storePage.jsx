import HeaderV2 from '../components/HeaderV2'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useMenu, useCar } from '../hooks/globalStates'
import { MenuContext, CarContext } from '../utils/Contexts'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import ScrollToTop from '../utils/ScrollToTop'
import '../assets/css/storePage/storePage.css'

function StorePage() {
    const {menu, setMenu} = useMenu();
    const {count, setCount} = useCar();
    const [stripePromise, setStripePromise] = useState(null);

    useEffect(() => {
        const loadStripeKey = async () => {
            const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            setStripePromise(stripe);
        };

        if (process.env.REACT_APP_STRIPE_PUBLIC_KEY) {
            loadStripeKey();
        } else {
            console.error("La clave pública de Stripe no está definida.");
        }
    }, []);
    
    return (
        <CarContext.Provider value={{count, setCount}}>
            <MenuContext.Provider value={{menu, setMenu}}>
                <Elements stripe={stripePromise}>
                    <div id="container-main" className="w-screen h-screen bg-bgWhite grid overflow-x-hidden 
                    sm:grid-rows-custom grid-rows-customSm">
                        <HeaderV2 />
                        <div id="contenedor" className="w-full h-full flexCol-itCenter bg-coffeBeans">
                            <Outlet />
                        </div>
                        <Footer />
                    </div>
                    <ScrollToTop />
                </Elements>
            </MenuContext.Provider>
        </CarContext.Provider>
     );
}

export default StorePage;