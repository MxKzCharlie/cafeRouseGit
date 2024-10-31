import { useNavigate } from "react-router-dom"
import '../../assets/css/storePage/navStore.css'

function NavStore({option}) {
    let storeOptions = [
        ['Bebidas Calientes', 'bebidas-calientes'], 
        ['Bebidas Frías', 'bebidas-frias'],
        ['Bebidas De Temporada', 'bebidas-de-temporada'],
        ['Repostería', 'reposteria'],
        ['Adicionales', 'adicionales'],
    ]
    const navigate = useNavigate();

    storeOptions.splice(option, 1);

    return (  
        <div className="container-nav">
            {storeOptions.map(section => (
                <div className="container-category-nav">
                    <div onClick={() => navigate(`/tienda/${section[1]}/`)} className="category-container">
                        <h2> {section[0]} </h2>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NavStore;



