
const express= require('express');
const morgan= require('morgan');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const cors= require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

//App
const app=express() ;

//DB
    mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true, 
        useUnifiedTopology: true     })
        
        .then (()=> console.log('Successfully Connected to MongoDB!!!'));


//middlewares
app.use(morgan('dev'));;
app.use(bodyParser.json());
app.use(cookieParser());

//cors

if(process.env.NODE_ENV === 'development'){

    app.use(cors({origin: `$(process.env.CLIENT_URL)`}));

}

//routes
 
app.get('/api',(req,res)=>{

    res.json({time: Date().toString()});
})

//port

const port=process.env.PORT || 8000
app.listen(port, ()=>{

    console.log(`Server in running on port ${port}`);
})


