import PaymentSection from './paymentSection'
import ProductsCar from './productsCar'
import { TotalContext } from '../../utils/Contexts'
import { useTotal } from '../../hooks/globalStates'
import '../../assets/css/storePage/carMain.css'

function CarMain() {
    const {total, setTotal} = useTotal();

    return(
        <TotalContext.Provider value={{total, setTotal}}>
            <div className="container-main">
                <ProductsCar />
                <PaymentSection />
            </div>
        </TotalContext.Provider>
    );
}


export default CarMain;



