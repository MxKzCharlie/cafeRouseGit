import car from '../../assets/img/carrito-de-compras.png'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CarContext } from "../../utils/Contexts"
import '../../assets/css/storePage/car.css'

function Car() {
    const {count, setCount} = useContext(CarContext);

    if (count.length === 0){
        return(
            <Link to="/tienda/pagar/" className="car-container">
                <p className="title">Ver carrito</p>  
                <img className="w-10 h-10" src={car} alt="car" />
            </Link>
        );    
    }
    return (
        <Link to="/tienda/pagar/" className="car-container">  
            <p className="title">Ver carrito</p>  
            <img className="w-10 h-10" src={car} alt="car" title=" Ver Carrito" />
            <span className="indicator-item badge badge-secondary">{count.length}</span>
        </Link>
    );
}

export default Car;