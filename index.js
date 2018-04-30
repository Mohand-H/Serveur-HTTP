const express = require('express')
const app = express()
let port = 3000


//les routes...

app.set('view engine', 'pug')

app.get('/',(request, response) => {
  console.log(request, response)
  response.render('index')

})

app.get('/about', (request, response) => {
  response.render('about')
})
//port d'ecoute..
app.listen(port, (err) => {
  if (err)
    return console.log('something bad happened', err)
  console.log(`server is listening on ${port}`)
})