import NavStore from "./navStore"
import OptionStore from "./optionsStore"
import Car from "./car"
import { mockHot } from "../../services/api"

function HotDrinks() {
    return (
        <>  
            <NavStore option={0}/>
            <div className="w-full h-auto flex flex-col items-center gap-2">
                <hr className="separator-up" />
                <hr className="separator-down" />
            </div>
            <div className="category-title-page">
                <h1>Bebidas Calientes</h1>
                <Car />
            </div>
            <OptionStore options={mockHot}/>
        </>
    );
}

export default HotDrinks;


