import NavStore from "./navStore"
import Car from "./car"

function SessonDrinks() {

    return (  
        <>  
            <NavStore option={2}/>
            <div className="w-full h-auto flex flex-col items-center gap-2">
                <hr className="separator-up" />
                <hr className="separator-down" />
            </div>
            <div className="category-title-page">
                <h1>Bebidas De Temporada</h1>
                <Car />
            </div>
            <div className="w-full h-80 flex flex-row justify-center items-center">
                <h2 className="text-5xl text-gray-500">Proximamente...</h2>
            </div>
        </>
    );
}

export default SessonDrinks;