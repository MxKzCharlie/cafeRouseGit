import NavStore from "./navStore"
import OptionStore from "./optionsStore"
import Car from "./car"
import { mockExtras } from "../../services/api"

function Extras() {
    return (  
        <>  
            <NavStore option={4}/>
            <div className="w-full h-auto flex flex-col items-center gap-2">
                <hr className="separator-up" />
                <hr className="separator-down" />
            </div>
            <div className="category-title-page">
                <h1>Adicionales</h1>
                <Car />
            </div>
            <OptionStore options={mockExtras}/>
        </>
    );
}

export default Extras;