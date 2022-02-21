
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
    .connect(process.env.DATABASE_CLOUD, {
        useNewUrlParser: true, 
        useUnifiedTopology: true     })
        
        .then (()=> console.log('Successfully Connected to MongoDB!!!'));


//middlewares
app.use(morgan('dev'));;
app.use(express.json());
app.use(cookieParser());


// app.use(cors(corsOptions)) // Use this after the variable declaration

//cors
if(process.env.NODE_ENV === 'development'){
    // console.log(process.env.CLIENT_URL);
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

//bring routes
const blogRoutes= require('./routes/blog')
const authRoutes= require('./routes/auth')
const userRoutes= require('./routes/user')


//routes middleware
app.use('/api',blogRoutes)
app.use('/api',authRoutes)
app.use('/api',userRoutes) 


//port
const port=process.env.PORT || 8000
app.listen(port, ()=>{

    console.log(`Server in running on port ${port}`);
})


