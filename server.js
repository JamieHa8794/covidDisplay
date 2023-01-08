const express = require('express');
const app = express();

const { syncAndSeed, models: {byCountry, byState} } = require('./db');

app.get('/', async (req, res, next)=>{
    try{
        const countryData = await byCountry.findAll()
        res.send(countryData)
    }
    catch(err){
        console.log(err)
    }
})


const init = async () =>{
    try{
        await syncAndSeed();
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`))
    }
    catch(err){
        console.log(err)
    }
}

init();