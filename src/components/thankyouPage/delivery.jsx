import { sendOrderDelivery } from "../../services/sendOrderDelivery"
import { useContext, useEffect } from "react"
import { DataClientContext, CarContext } from "../../utils/Contexts"
import { Link } from "react-router-dom"

function Delivery() {
    const {dataClient, setDataClient} = useContext(DataClientContext);
    const {count, setCount} = useContext(CarContext);
    
    useEffect(async () => {
        sendOrderDelivery(dataClient, count);
    }, []);
    
    return (  
        <div className="h-auto w-full flex flex-col justify-center items-center gap-4 my-28">
            <h1 className="text-center text-8xl font-titles">¡Gracias Por Su Compra!</h1>
            <span className="text-3xl px-4 text-center">En unos momentos recibira un mensaje via SMS</span>
            <Link to="/" className="btn btn-accent text-4xl">
                Ir a Inicio
            </Link>
        </div>
    );
}

export default Delivery;