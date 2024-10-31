import { Link } from "react-router-dom"
import presentation from "../../assets/img/presentation.jpg"
import '../../assets/css/homePage/contentV2.css'

function ContentV2() {
    return (
        <div className="h-full w-full flexCol-itCenter bg-coffeBeans">
            <div className="img-banner">
                <div className="w-full h-full bg-gradient-to-r from-gray-950 to-transparent
                flex flex-col justify-end items-start">
                    <div className="container-banner-title">
                        <h1 className="banner-title">
                            Visita Nuestra Tienda En Línea
                        </h1>
                        <Link to="tienda/main/" >    
                            <button className="banner-button">
                                Ir a Tienda
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container-info">
                <div className="container-info-img">
                    <img src={presentation} alt="presentation" className="info-img" />
                </div>
                <div className="container-info-paragraph">
                    <div className="text-center flex flex-col items-center gap-6">
                        <h1 className="font-titles text-3xl"><i>"QUIENES SOMOS"</i></h1>
                        <p className="font-general font-medium flex flex-wrap">
                        EN EXPENDIO DE CAFÉ ROUSE, TE DAMOS UN SERVICIO DE PRIMERA CALIDAD TAL 
                        COMO USTED SE MERECE, BEBIDAS QUE AL MOMENTO DE BEBERLA TE ENAMORARAS 
                        DE ELLA, Y UN EXCELENTE AMBIENTE PARA QUE USTED PUEDA DISFRUTAR DE SU 
                        CAFECITO, CON SUS AMIGOS, FAMILIA O TU PAREJA.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentV2;