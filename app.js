const express = require('express');
const app=express();
const bodyParser=require('body-parser');
const shopRoute=require('./routes/shop');
const adminRoute=require('./routes/admin');

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoute);
app.use(shopRoute);
app.use((req,res,next)=>{
    res.status(404).send('<h1>404 not found</h1>');
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port`);
});