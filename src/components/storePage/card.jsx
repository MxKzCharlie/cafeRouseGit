import taza from '../../assets/img/taza-de-cafe.png'
import { useContext } from "react"
import { CarContext } from "../../utils/Contexts"

function Card({info, details, img}) {
    const {count, setCount} = useContext(CarContext);

    return (  
        <div className="card">
            <div className="container-img-card">
                <img src={taza} alt="taza-de-cafe" className="img-card" />
            </div>
            <div className="container-hover-card">
                <div className="container-info-hover-card">
                    <h2 className="info-hover-card">{info}</h2>
                </div>
                <div className="container-button-hover-card">
                    <button onClick={() => setCount([...count, details])} className="btn btn-accent"> 
                        Añadir al carrito 
                    </button>
                </div>  
            </div>
        </div>
    );
}

export default Card;


