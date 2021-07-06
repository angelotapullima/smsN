const config  = require ('../config');
const client  = require('twilio')(config.accountSid,config.authToken);


/**
 * la función envia un mensaje por twilio
 * @param {string} body - Este es el cuerpo del mensaje
 * @param {string} phone  - este es el número de telefono
 */


async function sendMessage(body, phone){

    try{

        const message = await client.messages.create({
            to: phone,
            from: '+14792551066',
            body
        })
    
        console.log(message.sid)
        return message;

    }catch(error){
        console.log(error);
    }
    
}

module.exports = {sendMessage};