const mongoose = require('mongoose');
// const uri = process.env.MONGO_URL
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(' wow its connected');
})
.catch((error)=>{
    console.log('error in connection');
})




