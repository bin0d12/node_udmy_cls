const express = require('express')

const app = express()


app.get('/', (req, res) => {
   
    res.send({
        message : "this is calling in browser"
    })
})

app.listen(3000, () =>{
    console.log("listenning the port 3000");
})

