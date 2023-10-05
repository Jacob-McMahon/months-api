const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())
//object that makes the API

const month = {
    January: {
        days: 31,
        weeks:[1,2,3,4,5],
        season: 'winter',
        holidays:{names:["New Year's Day","Epiphany"]}
        },
    February: {
        days: 28,
        weeks:[5,6,7,8,9],
        season: 'winter',
        holidays:{names: ''}
    },
    March: {
        days: 31,
        height: [10,11,12,13,14],
        season: ['winter','spring'],
        holidays:{names:""}
    },
    April: {
        days: 30,
        weekst: [14,15,16,17,18],
        season: 'spring',
        holidays:{names:["Good Friday", "Easter Monday"]}
    },
    May: {
        days: 31,
        weeks: [19,20,21,22],
        season: 'spring',
        holidays:{names:["Labour Day", "Ascension Day"] } 
    },
    June: {
        days: 30,
        weeks: [22,23,24,25,26,27],
        season: ['spring', 'summer'],
        holidays:{names:["Midsummer's Eve", "Midsummer"]}
    },
    July: {
        days: 31,
        weeks: [27,28,29,30,31],
        season: 'summer',
        holidays:{names:""}        
    },
    August: {
        days: 31,
        weeks: [31,32,33,34,35],
        season: 'summer',
        holidays:{names:""}        
    },
    September: {
        days: 30,
        weeks: [35,36,37,38,39],
        season: ['summer', 'autumn'],
        holidays:{names:""}        
    },
    October: {
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
    December: {
        days: 31,
        weeks: [48,49,50,51,52],
        season: ['autumn', 'winter'],
        holidays:{names:["Christmas Eve", "Christmas Day", "New Year's Eve"]}        
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html')
})

app.get('/api/:boop', (req,res) => {
    const choice = req.params.boop.toLowerCase()
    if(month[choice]){
        res.json(month[choice])
    }else{
        res.json(month[unknown])
    }
})





app.listen(PORT, (req,res) => {
    console.log(`now listening on port ${PORT}`)
})