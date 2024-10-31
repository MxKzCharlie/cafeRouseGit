import HeaderV2 from "../components/HeaderV2"
import Footer from "../components/Footer"
import Car from "../components/storePage/car"
import { MenuContext, CarContext } from '../utils/Contexts'
import { useMenu, useCar } from "../hooks/globalStates"

function CarPage() {
    const {menu, setMenu} = useMenu();
    const {count, setCount} = useCar();

    return (
        <CarContext.Provider value={{count, setCount}}>
            <MenuContext.Provider value={{menu, setMenu}}>
                <div className="bg-bgWhite w-screen h-screen grid grid-rows-customV2 overflow-x-hidden">
                    <HeaderV2 />
                    <div className="w-full h-full bg-coffeBeans relative pt-11">
                        <Car />
                    </div>
                    <Footer />
                </div>
            </MenuContext.Provider>
        </CarContext.Provider>  
    );
}

export default CarPage;