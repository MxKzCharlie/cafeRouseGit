import NavStore from "./navStore"
import OptionStore from "./optionsStore"
import Car from "./car"
import { mockCold } from "../../services/api"

function ColdDrinks() {
    return (  
        <>  
            <NavStore option={1}/>
            <div className="w-full h-auto flex flex-col items-center gap-2">
                <hr className="separator-up" />
                <hr className="separator-down" />
            </div>
            <div className="category-title-page">
                <h1>Bebidas Frías</h1>
                <Car />
            </div>
            <OptionStore options={mockCold}/>
        </>
    );
}

export default ColdDrinks;