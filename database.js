require('dotenv').config();
// driver of mongo
const mongoose = require('mongoose');
// object conecction
const connection = mongoose.connection;


mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log(err));

connection.once('open', _ => {
    console.log("Database is connected to ",process.env.MONGO_URI);
});

connection.on('error', err => {
    console.log(err);
});

//hay que hacer un require desde index.js para ejecutar esta configuración