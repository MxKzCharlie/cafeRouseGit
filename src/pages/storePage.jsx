import HeaderV2 from '../components/HeaderV2'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { useMenu, useCar } from '../hooks/globalStates'
import { MenuContext, CarContext } from '../utils/Contexts'
import ScrollToTop from '../utils/ScrollToTop'
import '../assets/css/storePage/storePage.css'

function StorePage() {
    const {menu, setMenu} = useMenu();
    const {count, setCount} = useCar();

    return (
        <CarContext.Provider value={{count, setCount}}>
            <MenuContext.Provider value={{menu, setMenu}}>
                <div id="container-main" className="w-screen h-screen bg-bgWhite grid overflow-x-hidden 
                sm:grid-rows-custom grid-rows-customSm">
                    <HeaderV2 />
                    <div id="contenedor" className="w-full h-full flexCol-itCenter bg-coffeBeans">
                        <Outlet />
                    </div>
                    <Footer />
                </div>
                <ScrollToTop />
            </MenuContext.Provider>
        </CarContext.Provider>
     );
}

export default StorePage;