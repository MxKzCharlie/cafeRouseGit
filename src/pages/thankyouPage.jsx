import HeaderV2 from "../components/HeaderV2"
import Footer from "../components/Footer"
import { MenuContext } from '../utils/Contexts'
import { useMenu } from "../hooks/globalStates"
import { Link } from "react-router-dom"

function ThankYouPage() {
    const {menu, setMenu} = useMenu();

    return ( 
        <MenuContext.Provider value={{menu, setMenu}}>
            <div className="bg-bgWhite w-screen h-screen grid overflow-x-hidden
            sm:grid-rows-custom grid-rows-customSm">
                <HeaderV2 />
                <div className="h-auto w-full flex flex-col justify-center items-center gap-4 my-28">
                    <h1 className="text-center text-8xl font-titles">¡Gracias Por Su Compra!</h1>
                    <span className="text-3xl px-4 text-center">En unos momentos recibira un mensaje via SMS</span>
                    <Link to="/" className="btn btn-accent text-4xl">
                        Ir a Inicio
                    </Link>
                </div>
                <Footer />
            </div>
        </MenuContext.Provider> 
    );
}

export default ThankYouPage;