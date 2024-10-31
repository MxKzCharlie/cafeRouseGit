export const sendOrderPickUp = async (dataClient, order) => {
    console.log(dataClient);
    console.log(order);
    
    try {
        const response = await fetch('http://localhost:5000/api/twilio/send-sms-pickup', {
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
        alert('No se envio el mensaje, intentelo mas tarde');
        console.log('Error en el servidor', error);
    }
};