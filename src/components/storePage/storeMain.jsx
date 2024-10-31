import Card from "./card"
import Car from "./car"
import RainAnimations from '../../utils/rainAnimations'
import rainCoffeBeans from '../../assets/img/rainCoffeBeans.png'
import rainSesson from '../../assets/img/rainSesson.png'
import rainBakery from '../../assets/img/rainBakery.png'
import { Link } from "react-router-dom"
import '../../assets/css/animations.css'
import { card } from "../../services/api"
import '../../assets/css/storePage/storeMain.css'

function StoreMain() {
    return (  
        <>
            <div className="title-store-main">
                Favoritos De La Semana
                <Car />
            </div>
            <div className="container-card">
                {card.map(option => <Card info={option.info} details={option.details}/>)}
            </div>
            <div className="w-full h-auto flexCol-itCenter gap-2">
                <hr className="separators h-2" />
                <hr className="separators h-1" />
            </div>
            <div className="container-categorys-main">
                <div className="container-categorys">
                    <div className="container-up-categorys">
                        <Link to="/tienda/bebidas-calientes/"
                        className="sub-container-category bg-gradient-to-t from-white via-yellow-400 
                      to-red-500 from-40% via-60% to-85% hover-gradient">
                            <h2 className="title-category"> Bebidas Calientes </h2>
                        </Link>
                    </div>
                    <div className="container-up-categorys">
                        <Link to="/tienda/bebidas-frias/"
                        className="sub-container-category bg-gradient-to-t from-white via-blue-50 
                      to-blue-500 from-40% via-60% to-85% hover-gradient">
                            <h2 className="title-category"> Bebidas Frías </h2>
                        </Link>
                    </div>
                    <div className="container-up-categorys">
                        <Link to="/tienda/bebidas-de-temporada/"
                        className="sub-container-category">
                            <RainAnimations img={rainSesson} />
                            <h2 className="title-category"> Bebidas De Temporada </h2>
                        </Link>
                    </div>
                </div>
                <div className="container-categorys">
                    <div className="container-down-categorys">
                        <Link to="/tienda/reposteria/"
                        className="sub-container-category">
                            <RainAnimations img={rainBakery}/>
                            <h2 className="title-category"> Repostería </h2>
                        </Link>
                    </div>
                    <div className="container-down-categorys">
                        <Link to="/tienda/adicionales/"
                        className="sub-container-category">
                            <RainAnimations img={rainCoffeBeans}/>
                            <h2 className="title-category"> Adicionales </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoreMain;