import NavStore from "./navStore"
import OptionStore from "./optionsStore"
import Car from "./car"
import { mockBakery } from "../../services/api"

function Bakery() {
    return (  
        <>  
            <NavStore option={3}/>
            <div className="w-full h-auto flex flex-col items-center gap-2">
                <hr className="separator-up" />
                <hr className="separator-down" />
            </div>
            <div className="category-title-page">
                <h1>Repostería</h1>
                <Car />
            </div>
            <OptionStore options={mockBakery}/>
        </>
    );
}

export default Bakery;