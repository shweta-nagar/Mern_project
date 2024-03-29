const express = require('express');
const router = express.Router();
const authcontroller = require('../controllers/auth-controller')


// router.get('/', (req, res)=>{
//         res.status(200).send('We are using router')
// })

router.get('/',(authcontroller.home))

router.post('/register',(authcontroller.register))

router.post('/login',(authcontroller.login))





// router.get('/register', (req, res)=>{
//         res.status(200).send('this is register page')
// })

module.exports = router;