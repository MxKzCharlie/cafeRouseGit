import { Outlet, Link } from "react-router-dom"
import '../../assets/css/storePage/optionStore.css'

function OptionStore({options}) {
    return (  
        <div className="container-options-store">
            {options.map(option => (
                <div className="container-option group">
                    <Link 
                    to="personalizacion/" 
                    state={{details: option[2], object: option[0], info: option[1], prices: option[3]}}>
                        <div className="container-title-option">
                            <h3 className="title-option">{option[0]}</h3>
                        </div>
                    </Link>
                    <div className="container-info-hover-option lg:group-hover:-translate-y-24">
                        <p className="info-hover-option">
                            {option[1]}
                        </p> 
                    </div>    
                </div>
            ))}
            <Outlet />
        </div>
    );
}

export default OptionStore;


