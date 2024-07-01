const express = require('express');
const app = express()
const port= 3000


/// routes 

app.get('/', (req, res) => {
    res.send('Node api')
  })

app.listen(port,()=>{
    console.log("next api app run in the localhost post 3000 ")
})