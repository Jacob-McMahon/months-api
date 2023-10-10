const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
//object that makes the API

const month = {
    january: {
        days: 31,
        weeks:[1,2,3,4,5],
        season: 'winter',
        holidays:{names:["New Year's Day","Epiphany"]}
        },
    february: {
        days: 28,
        weeks:[5,6,7,8,9],
        season: 'winter',
        holidays:{names: ''}
    },
    march: {
        days: 31,
        height: [10,11,12,13,14],
        season: ['winter','spring'],
        holidays:{names:""}
    },
    asyncpril: {
        days: 30,
        weekst: [14,15,16,17,18],
        season: 'spring',
        holidays:{names:["Good Friday", "Easter Monday"]}
    },
    may: {
        days: 31,
        weeks: [19,20,21,22],
        season: 'spring',
        holidays:{names:["Labour Day", "Ascension Day"] } 
    },
    june: {
        days: 30,
        weeks: [22,23,24,25,26,27],
        season: ['spring', 'summer'],
        holidays:{names:["Midsummer's Eve", "Midsummer"]}
    },
    july: {
        days: 31,
        weeks: [27,28,29,30,31],
        season: 'summer',
        holidays:{names:""}        
    },
    august: {
        days: 31,
        weeks: [31,32,33,34,35],
        season: 'summer',
        holidays:{names:""}        
    },
    september: {
        days: 30,
        weeks: [35,36,37,38,39],
        season: ['summer', 'autumn'],
        holidays:{names:""}        
    },
    october: {
        days: 30,
        weeks: [39,40,41,42,43],
        season: 'autumn',
        holidays:{names:""}        
    },
    november: {
        days: 30,
        weeks: [43,44,45,46,47,48],
        season: 'autumn',
        holidays:{names:"All saints' day"}        
    },
    december: {
        days: 31,
        weeks: [48,49,50,51,52],
        season: ['autumn', 'winter'],
        holidays:{names:["Christmas Eve", "Christmas Day", "New Year's Eve"]}        
    },
    unknown: {
        days: 0,
        weeks: [],
        season: [],
        holidays:{names:{}}
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:choice', (req,res) => {
    const cho = req.params.choice.toLowerCase()
    if(month[cho]){
        res.json(month[cho])
    }else{
        console.log('oops')
       // res.json(month[unknown])
    }
})


app.listen(PORT, (req,res) => {
    console.log(`now listening on port ${PORT}`)
})