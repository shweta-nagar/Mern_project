require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const router = require('./Router/auth-router')
const contactRouter = require('./Router/contact-router')
const serviceRouter = require('./Router/service-router')
const adminRouter = require('./Router/admin-router')
require('./utils/db')

const cors = require('cors')
const fileupload = require('express-fileupload');
app.use(fileupload());
app.use(express.static('assets'));
const path = require('path')
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(cors())
app.use(express.json())
app.use('/api',contactRouter)
app.use('/api/data',serviceRouter)
app.use('/api/auth',router)


//let's define admin route
app.use('/api/admin',adminRouter)




// app.get('/', (req, res) =>{
//     res.send('this is our first api')
// })

// app.get('/about', (req, res) =>{
//     res.send('this is about')
// })
// app.get('/contact', (req, res) =>{
//     res.send('this is our conatct page')
// })

// app.post('/', (req, res) =>{
//     res.send('this is post  method')
// })

// app.put('/:id', (req, res) =>{
//     res.send('this is put method')
// })

// app.delete('/:id', (req, res) =>{
//     res.send('this is delete method')
// })

// app.all('*', (req, res) =>{
//     res.send('404-Page Not Found')
// })
app.listen(port,()=>{
    console.log('listening on the https://localhost:5000')
})