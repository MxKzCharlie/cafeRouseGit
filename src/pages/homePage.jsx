import HeaderV2 from "../components/HeaderV2"
import ContentV2 from "../components/homePage/ContentV2"
import Footer from "../components/Footer"
import { MenuContext } from '../utils/Contexts'
import { useMenu } from "../hooks/globalStates";

function HomePage() {
    const {menu, setMenu} = useMenu();

    return (
        <MenuContext.Provider value={{menu, setMenu}}>
            <div className="bg-bgWhite w-screen h-screen grid overflow-x-hidden
            sm:grid-rows-custom grid-rows-customSm">
                <HeaderV2 />
                <ContentV2 />
                <Footer />
            </div>
        </MenuContext.Provider> 
    );
}

export default HomePage;


