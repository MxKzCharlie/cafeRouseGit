import { useNavigate } from "react-router-dom"
import cruz from '../../assets/img/cruz.png'
import logo from '../../assets/img/logoRouse.png'
import { data } from "../../services/api"
import { useLocation } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { CarContext } from '../../utils/Contexts'
import '../../assets/css/storePage/detailsStore.css'

function DetailsStore() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const indexList = state.details;
    const object = state.object;
    const info = state.info;
    const prices = state.prices;
    const customData = [];
    const [quantity, setQuantity] = useState({});
    const [price, setPrice] = useState(0);
    const [details, setDetails] = useState({});
    const {count, setCount} = useContext(CarContext);

    indexList.forEach(index => {
       customData.push(data[index]);
    });
    
    if(customData[0].id === 'tamaños-frios' || customData[0].id === 'tamaños-calientes'){
        for(let i = 0; i < prices.length; i++){
            customData[0].options[i][1] = prices[i];
        }
    }

    const handleDetails = (name, option, value) => {
        setDetails({
            ...details,
            [name]: [option, value],
        });
    }

    const handleQuantity = (e, id, price, max) => {
        const value = parseInt(e.target.value, 10);
        
        if (value > 4) {
            e.target.value = 4;
        } else if (value < 0) {
            e.target.value = 0;
        }

        setQuantity({
            ...quantity,
            [id]: [e.target.value, price, max] 
        });
    }

    useEffect(() => {
        let total = 0;

        Object.values(details).forEach(value => {
            total += value[1];
        })
        Object.values(quantity).forEach(value => {
            if(value[0] > value[2]){
                total += (value[1] * max);
            }else{
                total += (value[0] * value[1]);
            }
        })

        setPrice(total);
    }, [quantity, details]);

    const handleOrder = (event) => {
        event.preventDefault();

        let order = [];
        order.push(object)
        
        let listDetails = [];
        Object.values(details).forEach(detail =>{
            listDetails.push(detail[0]);
        });
        Object.entries(quantity).forEach(([key, value]) =>{
            if (value[0] > 0){
                listDetails.push(`${value[0]} de ${key}`);
            }
        });
        order.push(listDetails);

        order.push(price);

        setCount([...count, order]);
        navigate("..", {relative: "path"});
    };

    return (  
        <div className="w-screen h-screen bg-bgOpacity flexCol-itCenter fixed z-details top-0 left-0">
            <form onSubmit={handleOrder} className="details-container">
                <button onClick={() => navigate('..', {relative: 'path'})} 
                className="container-button-close">
                    <img src={cruz} alt="cerrar" className="img-button-close" />
                </button>
                <div className="container-presentation">
                    <img src={logo} alt="presentacion" className="w-72 h-auto rounded-t-xl"/>
                    <h1 className="w-full h-auto text-xl text-center font-titles">
                        <i>"Despierta Los Latidos De Tu Corazón"</i>
                    </h1>
                    <div className="infoSm">
                        <i>{info}</i>
                    </div>
                </div>
                <div className="w-full h-auto flexCol-itCenter">
                    {
                        customData.map(detail => (
                            <div className="w-full h-auto flexCol-itCenter">
                                <div className="container-title-detail">
                                    <hr className="title-hr" />
                                    <h2 className="title-detail">{detail.title}</h2>
                                    <hr className="title-hr" />
                                </div>
                                <div className="container-option-detail">
                                    {detail.options.map(option => (
                                        <div className="container-detail">
                                            {
                                                detail.input === "radio" ? (
                                                    detail.required === "true" ? (
                                                        <input type={detail.input} name={detail.title} id={option[0]} 
                                                        className="radio radio-accent" value={option[1]} required
                                                        onChange={() => handleDetails(detail.title, option[0], option[1])} />
                                                    ):(
                                                        <input type={detail.input} name={detail.title} id={option[0]} 
                                                        className="radio radio-accent" value={option[1]} 
                                                        onChange={() => handleDetails(detail.title, option[0], option[1])} />
                                                    )
                                                ) :(
                                                    <input type={detail.input} name={detail.title} id={option[0]} 
                                                    defaultValue="0" min="0" max="4" 
                                                    onChange={(e) => handleQuantity(e, option[0], option[1], 4)}
                                                    className="details-inputNumber" />
                                                )
                                            }
                                            <div className="flex items-center">
                                                <span className="font-general">{option[0]}</span>
                                                <p className="text-gray-500">+${option[1]}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full h-auto p-8 flex flex-row justify-between items-center">
                    <span className="font-normal text-xl">Total = ${price}</span>
                        <button type="submit" 
                        className="btn btn-accent text-lg font-normal">
                            Añadir al carrito
                        </button>
                </div>
            </form>
        </div>
    );
}

export default DetailsStore;

