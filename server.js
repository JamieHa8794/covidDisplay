const express = require('express');
const { syncAndSeed } = require('./db');



const init = () =>{
    try{
        syncAndSeed();
    }
    catch(err){
        console.log(err)
    }
}

init();