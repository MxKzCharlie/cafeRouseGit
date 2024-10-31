import logoRouse from '../assets/img/logoRouse.png'
import salida from '../assets/img/cruz.png'
import { Link } from 'react-router-dom'
import { MenuContext } from '../utils/Contexts'
import { useContext} from 'react'
import '../assets/css/mains/menu.css'

function Menu() {
    const {menu, setMenu} = useContext(MenuContext);

    return (  
        <div style={menu} className="flex flex-row justify-end h-screen w-screen bg-bgOpacity fixed z-50">
            <aside className="container-menu">
                <img src={logoRouse} alt="Rouse" className="w-56 h-auto "/>
                <div className="flexCol-itCenter">
                    <Link onClick={() => setMenu({display: "none"})} to="/tienda/bebidas-calientes/" 
                    className="option-menu" > Bebidas Calientes </Link>
                    <hr className="h-1 w-44" />
                    <Link onClick={() => setMenu({display: "none"})} to="/tienda/bebidas-frias/" 
                    className="option-menu" > Bebidas Frías </Link>
                    <hr  className="h-1 w-36" />
                    <Link onClick={() => setMenu({display: "none"})} to="/tienda/bebidas-de-temporada/" 
                    className="option-menu" > Bebidas De Temporada </Link>
                    <hr className="h-1 w-56" />
                    <Link onClick={() => setMenu({display: "none"})} to="/tienda/reposteria/" 
                    className="option-menu" > Repostería </Link>
                    <hr className="h-1 w-28" />
                    <Link onClick={() => setMenu({display: "none"})} to="/tienda/adicionales/" 
                    className="option-menu" > Adicionales </Link>
                    <hr className="h-1 w-32" />
                    <Link onClick={() => setMenu({display: "none"})} to="/tienda/main/" 
                    className="option-menu" > Ver Tienda </Link>
                </div>
                <div onClick={() => setMenu({display: "none"})} className="close-menu-button">
                    <img src={salida} alt="salida" className="h-12 w-12"/>
                </div>
            </aside>
        </div>
    );
}

export default Menu;