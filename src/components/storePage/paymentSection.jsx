import { useState, useContext, useEffect } from "react"
import { CarContext, TotalContext } from "../../utils/Contexts"
import { dataAdress } from '../../services/api'
import { sendOrderPickUp } from "../../services/sendOrderPickUp"
import { sendOrderDelivery } from "../../services/sendOrderDelivery"
import InputMask from "react-input-mask"

function PaymentSection() {
    const [section, setSection] = useState(0);
    const [dataClient, setDataClient] = useState({});
    const {count, setCount} = useContext(CarContext);
    const {total, setTotal } = useContext(TotalContext);
    const [disabled, setDisabled] = useState({
        "style": {cursor: "default", color: "gray"},
        "toggle": true,
    });

    const handleChange = (e) => {
        setDataClient({
            ...dataClient,
            [e.target.name]: e.target.value,
        })
        console.log(dataClient);
    };

    useEffect(() => {
        setDataClient({
            ...dataClient,
            ["total"]: total,
        })
    }, [total]);

    const handlePaymentPickUp = (event) => {
        event.preventDefault();
        
        if(total === 0){
            return null;
        };

        sendOrderPickUp(dataClient, count);
    };

    const handlePaymentDelivery = (cash) => {
        if(cash){
            if(total === 0){
                return null;
            };
            
            setDataClient({
                ...dataClient,
                "Pago": "Pendiente",
            })

            sendOrderDelivery(dataClient, count);
        }else{
            if(total === 0){
                return null;
            };

            setDataClient({
                ...dataClient,
                "Pago": "Realizado",
            });
            
            sendOrderDelivery(dataClient, count);
        }
    };

    const sectionContent = () => {
        if (section === 0 && disabled.toggle === false){
            return (
                <div className="container-form">
                    <label className="container-input">
                        Nombre: 
                        <input name="Nombre" onChange={handleChange}
                        placeholder="Nombre" required
                        type="text" className="inputs-paymentSection" />
                    </label>
                    <label className="container-input">
                        Num. Para Contactarlo
                        <InputMask mask="+99 999-999-9999" placeholder="+XX XXX-XXX-XXXX" className="inputs-paymentSection"
                        onChange={handleChange} name="Numero" required>
                            {(inputProps) => <input {...inputProps} type="tel"/>}    
                        </InputMask>
                    </label>
                    <label className="container-input">
                        Eliga su Delegación:
                        <select name="Delegation" onChange={handleChange} 
                        className="select-delegation" required>
                            {
                                dataAdress.map(delegation => (
                                    <option className="select-delegation-options" 
                                    value={delegation[0]}>
                                        {delegation[0]}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label className="container-input">
                        Colonia: 
                        <input name="Colonia" onChange={handleChange}
                        placeholder="Colonia" required
                        type="text" className="inputs-paymentSection" />
                    </label>
                    <label className="container-input">
                        Calle y # Exterior e Interior: 
                        <input name="Address" onChange={handleChange}
                        placeholder="Ingrese su Direccion" required
                        type="text" className="inputs-paymentSection" />
                    </label>
                    <button onClick={() => handlePaymentDelivery(false)}
                    type="submit" className="btn btn-secondary text-light">
                        Pago en Línea
                    </button>
                    <button onClick={() => handlePaymentDelivery(true)}
                    type="submit" className="btn btn-secondary text-light">
                        Pago en Efectivo
                    </button>
                </div>
            );
        }
        return (
            <form onSubmit={handlePaymentPickUp} className="container-form">
                <label className="container-input">
                    Nombre: 
                    <input onChange={handleChange}  type="text"
                    placeholder="Nombre"  name="Nombre" required
                    className="inputs-paymentSection" />
                </label>
                <label className="container-input">
                    Num. Para Contactarlo: 
                    <InputMask mask="+99 999-999-9999" placeholder="+XX XXX-XXX-XXXX" className="inputs-paymentSection"
                    onChange={handleChange} name="Numero" required>
                            {(inputProps) => <input {...inputProps} type="tel"/>}    
                    </InputMask>    
                </label>
                <button type="submit" className="btn btn-secondary text-light">
                    Finalizar
                </button>
                <span className="span-pickUp">
                    <i>El pago lo realiza en la tienda fisica, puede ser en efectivo o contamos con terminal.</i>
                </span>
            </form>
        );
    }

    useEffect(() => {
        if (count.length >= 4){
            setDisabled({
                "style": null,
                "toggle": false,
            });
        }else{
            setDisabled({
                "style": {cursor: "default", color: "gray"},
                "toggle": true,
            })
        }
    }, [count]);

    return (  
        <div className="container-paymentSection">
            <span className="note"><i>*4 productos minimos para entrega a domicilio*</i></span>
            <div className="w-full h-20 flex flex-row items-center justify-around">
                <label onClick={() => setSection(1)} className="label-typeDelivery">
                    Para Recojer
                    <input type="radio" name="metodo" className="radio radio-secondary" defaultChecked/>
                </label>
                <label style={disabled.style} onClick={() => setSection(0)} className="label-typeDelivery">
                    Para Domicilio
                    <input type="radio" name="metodo" className="radio radio-secondary" disabled={disabled.toggle}/>
                </label>
            </div>
            <div className="w-full h-auto flexCol-itCenter">
                {sectionContent()}
            </div>
        </div>
    );
}

export default PaymentSection;