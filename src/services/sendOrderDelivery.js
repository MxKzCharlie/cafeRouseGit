export const sendOrderDelivery = async (dataClient, order) => {
    try {
        const response = await fetch('https://cafe-rouse-backend.vercel.app/api/twilio/send-sms-delivery', {
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
        if(result.success){
            alert('Mensaje enviado con exito');
        }else {
            alert('No se envio el mensaje, intentelo mas tarde');
            console.log('Error al enviar el mensaje');
        }

    }catch(error){
        alert('Error en el servidor, intentelo mas tarde');
        console.log('Error en el servidor', error);
    }
};