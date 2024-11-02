export const sendOrderPickUp = async (dataClient, order, navigate) => {
    try {
        const response = await fetch('https://cafe-rouse-backend.vercel.app/api/twilio/send-sms-pickup', {
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
            console.log('Mensaje enviado con exito');
            navigate("/thankyou");
        }else {
            alert('No se envio el mensaje, intentelo mas tarde');
            console.log('Error al enviar el mensaje');
        }

    }catch(error){
        alert('Error en el servidor, intentelo mas tarde');
        console.log('Error en el servidor', error);
    }
};