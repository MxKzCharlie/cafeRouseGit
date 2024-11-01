export const sendStripe = async (total) => {
    try {
        const response = await fetch('https://cafe-rouse-backend.vercel.app/api/stripe', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                total: total,
            }),
        });

        const result = await response.json();
        if(result.url){
            window.location.href = session.url;
        }else {
            alert('Error al conectar con metodo de pago');
        }

    }catch(error){
        alert('Error en el servidor, intentelo mas tarde');
        console.log('Error en el servidor', error);
    }
};