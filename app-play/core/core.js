const http = require('http')
const port = 6666

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!' +  Math.floor(Math.random() * Math.floor(1000)))
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
