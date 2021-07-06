const {Router} = require('express');
const router = Router();

const {indexController, postMessage,receiveMessage} =require('../controllers/index.controller')


//rutas principales
router.get('/',indexController);


//ruta para enviar sms
router.post('/send-sms', postMessage);


//ruta para recibir mensajes
router.post('/new-sms',receiveMessage)

module.exports = router;