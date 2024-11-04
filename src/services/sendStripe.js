export const sendStripe = async (dataClient, order) => {
    try {
        const response = await fetch('https://cafe-rouse-backend.vercel.app/api/stripe/create-checkout-session', {
            method: 'POST',
            headers: {
             'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                dataClient: dataClient,
                orderDetails: order,
            }),
        });

        const result = await response.json();
        if(result.url){
            window.location.href = result.url;
        }else {
            alert('Error al conectar con metodo de pago');
        }

    }catch(error){
        alert('Error en el servidor, intentelo mas tarde');
        console.log('Error en el servidor', error);
    }
};