const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let uselessFacts = {

    '1': {
        'id': 1,
        'fact': 'Noel used to be a roadie for the Inspiral Carpets before joining Oasis.',
    },

    '2': {
        'id': 2,
        'fact': '*Angrily shakes tambourine at bloke*'
    },

    '3': {
        'id': 3,
        'fact': 'Noel was a regular at the Manchester Club The Hacienda and there is a video where you can see him there.',
    },

    '4': {
        'id': 4,
        'fact': 'Radio Supernova 106.6 fm was the official radio station for those travelling to Oasis Knebworth gigs on the 10th/11th August 1996. The station played a mixture of tracks from Oasis and all supporting artists over the two days along with concert and travel info.'
    },

    '5': {
        'id': 5,
        'fact': 'Oasis was founded in 1991.',
    },

    '6': {
        'id': 6,
        'fact': 'Both Liam and Noel support Manchester City, so that\'\s like Oasis\'\ official football team',
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {

    const keys = Object.keys(uselessFacts)
    var randomKey = keys[Math.floor(Math.random()*keys.length)]
    var randomValue = uselessFacts[randomKey].fact

    console.log(randomKey)
    console.log(randomValue)
    response.json(randomValue)
   
    // let rando = Math.floor(Math.random() * uselessFacts.length)
    // console.log(uselessFacts[rando])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})