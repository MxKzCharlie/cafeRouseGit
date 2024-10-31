import whatsapp from '../assets/img/whatsapp.png'
import instagram from '../assets/img/instagram.png'
import facebook from '../assets/img/facebook.png'
import '../assets/css/mains/footer.css'

function Footer() {
    return (  
        <div className="container-footer">
            <div className="container-info-events">
                <h2 className="font-titles font-semibold text-2xl">Información Eventos</h2>
                <div className="sub-container-info-events">
                    <img src={whatsapp} alt="whatsapp" className="w-5 h-5" />
                    <p>+52 664 735 4900</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center p-4">
                    <h2 className="text-2xl font-semibold font-titles" >Horarios</h2>
                    <p className="font-semibold">Lunes-Miercoles</p>
                    <p>6:30 a.m. - 8:20 p.m.</p>
                    <p className="font-semibold">Jueves y Sabado</p>
                    <p>6:30 a.m. - 9:00 p.m.</p>
                    <p className="font-semibold">Viernes</p>
                    <p>6:30 a.m. - 10:00 p.m. </p>
                    <p className="font-semibold">Domingos</p>
                    <p>6:30 a.m. - 8:00 p.m.</p>
                </div>
                <span className="copyright">Derechos de autor © 2024. Café Rouse®</span>
            </div>
            <div className="container-social-media">
                <div className="flex flex-col items-center gap-3">    
                    <h2 className="font-titles font-semibold text-2xl">Síguenos</h2>
                    <div className="flex flex-row gap-8">
                        <a href="https://www.instagram.com/caferouse/?hl=es" target="_blank">
                            <img src={instagram} alt="instagram" className="w-10 h-10 ease-in-out transition-transform hover:scale-125" />
                        </a>
                        <a href="https://www.facebook.com/p/Expendio-de-CAFE-ROUSE-100069741080983/" target="_blank">
                            <img src={facebook} alt="facebook" className="w-10 h-10 ease-in-out transition-transform hover:scale-125" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h2 className="font-titles font-semibold text-2xl">Ordena Tambien Por:</h2>
                    <a href="https://www.ubereats.com/mx/store/rouse-cafe/p_idhh1CUHKB-WY4f-Y9uw?srsltid=AfmBOoqbZEsXkLe8vErBnV3RJHQ6bTv1wdhGPeVPTvv0YtEQlBaq8eLM" 
                    target="_blank" className="text-light text-3xl ease-in-out transition-transform hover:scale-125">
                        Uber<span className="font-semibold">Eats</span>
                    </a>
                </div>
            </div>
            <span className="copyright-sm">Derechos de autor © 2024. Café Rouse®</span>
        </div>
    );
}

export default Footer;