import taza from '../../assets/img/taza-de-cafe.png'
import cruz from '../../assets/img/cruz.png'
import { useContext, useEffect } from 'react'
import { CarContext, TotalContext } from '../../utils/Contexts'

function ProductsCar() {
    const {count, setCount} = useContext(CarContext);
    const {total, setTotal} = useContext(TotalContext);

    useEffect(() => {
        let sum = 0
        count.forEach(product => {
            sum += product[product.length - 1];
        })

        setTotal(sum);
    }, [count]);

    const handleRemove = (product) => {
        const index = count.indexOf(product);
        let newCount = [...count];
        newCount.splice(index, 1);
        setCount(newCount);
    };
    
    const products = count.length === 0 ? (
        <div className="w-full h-1/2 mt-8 flex justify-center items-center">
            <span className="text-gray-500 text-5xl">Vacío...</span>
        </div>
    ):(
        <div className="w-full h-auto">
             <div className="w-full h-auto text-center text-4xl">
                Total = ${total}
            </div>
            {count.map(product => (
                <div className="w-full h-auto flexCol-itCenter px-2 py-3 relative indicator remove-container">
                    <button className="delete-button"
                     onClick={() => handleRemove(product)} >
                        <img src={cruz} alt="cerrar" className="w-5 h-5" />
                    </button>
                    <div className="w-full h-auto flex flex-row items-center justify-between">
                        <img src={taza} alt="taza" className="img-product-car" />
                        <div className="w-full h-full flex flex-col gap-1 items-center">    
                            <h3 className="title-product-car">{product[0]}</h3>
                            <div className="w-full h-auto flex flex-row flex-wrap justify-center items-center text-center">
                            {
                                product[1].map(detail => <p>{`${detail}, `}</p>)
                            }
                            </div>
                        </div>
                        <span className="h-full w-auto flex justify-center items-center text-2xl
                        sm:text-4xl">
                            ${product[product.length - 1]}
                        </span>
                    </div>
                    <hr className="w-full h-1 bg-[#3E2723] rounded-3xl" />
                </div>
            ))}
        </div>
    );
    
    return (  
        <div className="container-products-car-and-payment">
            {products}
        </div>
    );
}

export default ProductsCar;