const express=require("express");
const AuthRouter=require('./routes/AuthRouter')
const app = express();
const cors=require('cors')
const bodyParser=require('body-parser')
require('dotenv').config();
require('./models/db')
const homeRoute=require("./routes/userDetails")
const PORT=process.env.PORT || 8080

app.get('/ping',(req,res)=>{
    res.send("hello ");

});

app.use(bodyParser.json());

app.use(cors())


app.use('/auth',AuthRouter )
app.use('/userDetails',homeRoute) 


app.use(express.json());


app.listen(PORT,()=>{
console.log("server is ruuning on 8080")
})