const express = require ('express');
// const axios = require ('axios');
const { apiRouter } = require('./src/routes/api.router')
const app = express();
const port = 4000;


// Body parser
app.use (express.json());

// Routers
app.use ('/api/v1/users', apiRouter);


app.use((err, req, res, next) =>{
    return res.status(err.status || 500).json({
        status: 'failed',
        message: err.message
    })
})



app.listen(port, ()=> {
    console.log (`Server listening on PORT ${port}`)
})