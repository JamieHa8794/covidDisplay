const express = require('express');
const app = express();
const path = require('path')

const { syncAndSeed, models: {byCountry, byState} } = require('./db');


app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'index.html')))




//apis

app.get('/api/byCountry', async (req, res, next)=>{
    try{
        const countryData = await byCountry.findAll()
        res.send(countryData)
    }
    catch(err){
        console.log(err)
    }
})

app.get('/api/byState', async (req, res, next)=>{
    try{
        const stateData = await byState.findAll()
        res.send(stateData)
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