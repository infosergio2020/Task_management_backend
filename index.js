const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// call mongo config
require('./database');
// call router
const indexRouter = require('./routes/index');
// call server at object express
var app = express();

// set port
app.set('port',process.env.PORT || 3000);
// set engine view
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// middlewares
app.set(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));


app.use('/',indexRouter);

app.listen(app.get('port'), ()=>{
    console.log('Server on port '+ app.get('port'));
    console.log('Please visit --> http://localhost:'+ app.get('port'));
});
