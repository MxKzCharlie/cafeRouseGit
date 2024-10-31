import logoRouse from '../assets/img/logoRouse.png'
import store from '../assets/img/tienda.png'
import home from '../assets/img/hogar.png'
import ubication from '../assets/img/marcador.png'
import menuImg from '../assets/img/menu-hamburguesa.png'
import Menu from './menu'
import { Link } from 'react-router-dom'
import { MenuContext } from '../utils/Contexts'
import { useContext} from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import '../assets/css/mains/header.css'

function Header() {
    const {menu, setMenu} = useContext(MenuContext);
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <div className="header-container">
                <div className="w-full h-auto bg-primary flex flex-row">
                    <span className="font-general font-semibold text-customBlack text-xs sm:text-sm hidden">
                        25% de Descuento en todas las Bebidas Calientes
                    </span>
                </div>   
                <div className="sub-header-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logoRouse} alt="Rouse" className="h-20 w-auto"/>
                        </Link>
                    </div>
                    <div className="header-navbar">
                        <Link to="/">
                            <div className="flexCol-itCenter justify-center">
                                <img src={home} alt="Inicio" className="img-header"/>
                                <span className="title-header">Inicio</span>
                            </div>
                        </Link>
                        <hr className="bg-secondary w-0.5 h-14" />
                        <a target="_blank" 
                        href="https://www.google.com/maps/place/Expendio+de+caf%C3%A9+rouse/@32.4940306,-116.9033383,12z/data=!4m6!3m5!1s0x80d93926352418c9:0xccadbb3258e013c5!8m2!3d32.5079526!4d-116.9192596!16s%2Fg%2F11lh334kg4?authuser=0&entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D">
                            <div className="flexCol-itCenter justify-center cursor-pointer">
                                <img src={ubication} alt="Locacion" className="img-header"/>
                                <p className="title-header"> Ubicación </p>
                            </div>
                        </a>
                        <hr className="bg-secondary w-0.5 h-14" />
                        <Link to="/tienda/main/" >
                            <div className="flexCol-itCenter justify-center">
                                <img src={store} alt="Tienda" className="img-header " />
                                <p className="title-header"> Tienda </p>
                            </div>
                        </Link>
                        <hr className="bg-secondary w-0.5 h-14" />
                        <div onClick={() => setMenu({display: "block"})} 
                        className="flexCol-itCenter justify-center cursor-pointer">
                            <img src={menuImg} alt="menu" className="img-header" />
                            <p className="title-header"> Menú </p>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </>
    );
}

export default Header;