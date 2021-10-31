
const express= require('express');
const morgan= require('morgan');
const bodyParser= require('body-parser');
const cookieParser= require('cookie-parser');
const cors= require('cors');
const mongoose=require('mongoose');
require('dotenv').config();

//bring routes
const blogRoutes= require('./routes/blog')

//App
const app=express() ;

//DB
    mongoose
    .connect(process.env.DATABASE_LOCAL, {
        useNewUrlParser: true, 
        useUnifiedTopology: true     })
        
        .then (()=> console.log('Successfully Connected to MongoDB!!!'));


//middlewares
app.use(morgan('dev'));;
app.use(bodyParser.json());
app.use(cookieParser());
//routes middleware
app.use('/api',blogRoutes)


//cors

if(process.env.NODE_ENV === 'development'){

    app.use(cors({origin: `$(process.env.CLIENT_URL)`}));

}


//port

const port=process.env.PORT || 8000
app.listen(port, ()=>{

    console.log(`Server in running on port ${port}`);
})


