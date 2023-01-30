const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id":"1",
      "title":"Book Review: How to make your fuel"
    },
    {
      "id":"2",
      "title":"Game Review: Pokemon Brillian Diamond"
    },
    {
      "id":"3",
      "title":"Show Review: Alice in Borderland"
    }
  ])
})


app.get('/trending', (req, res) => {
    res.json([
      {
        "id":"1",
        "artiste":"Davido",
        "title":"Omo BabaOlowo"
      },
      {
        "id":"2",
        "artiste":"Wizkid",
        "title":"Essence"
      },
      {
        "id":"3",
        "artiste":"Omahlay",
        "title":"Recognise"
      }
    ])
  })

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})