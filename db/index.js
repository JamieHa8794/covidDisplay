const Sequelize = require('sequelize');
const {STRING, INTEGER} = Sequelize
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/coviddisplay');

const {stateData} = require('./covidState')
// const {countryData} = require('./covidCountry')


const byState = db.define('byState', {
    date: {
        type: STRING
    },
    month:{
        type: STRING
    },
    day:{
        type: STRING
    },
    year:{
        type: STRING
    },
    state:{
        type: STRING
    },
    fips:{
        type: STRING
    },
    cases:{
        type: STRING
    },
    deaths:{
        type: STRING
    }
})

// const byCountry = db.define('byCountry', {
//     date: {
//         type: STRING
//     },
//     day:{
//         type: STRING
//     },
//     year:{
//         type: STRING
//     },
//     cases:{
//         type: STRING
//     },
//     deaths:{
//         type: STRING
//     }
// })


const syncAndSeed = async () =>{
    try{
        await db.sync({force: true})

        console.log('connected to db')

    
        stateData.map(stateEntry =>{
            byState.create({
                date: stateEntry.date,
                month: stateEntry.month,
                day: stateEntry.day,
                year: stateEntry.year,
                state: stateEntry.state,
                fips: stateEntry.fips,
                cases: stateEntry.cases,
                deaths: stateEntry.deaths
            })
        })

        // await Promise.all(countryData.map(countryEntry =>{
        //     byCountry.create({
        //         date: countryEntry.date,
        //         month: countryEntry.month,
        //         day: countryEntry.day,
        //         year: countryEntry.year,
        //         cases: countryEntry.cases,
        //         deaths: countryEntry.deaths
        //     })
        // }))
        
        console.log('data entered')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = {
    syncAndSeed,
    db,
    models:{
        byState,
        // byCountry
    }
}