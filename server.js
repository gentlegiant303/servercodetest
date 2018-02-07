const http = require("http");

const PORTONE = 7000;
const PORTTWO = 7500;

function handleRequestOne(request, response) {
  response.end("You are the best in the world!")
}

function handleRequestTwo(request, response) {
  response.end("You are the worst in the world!")
}

let serverone = http.createServer(handleRequestOne);
let servertwo = http.createServer(handleRequestTwo);

serverone.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:" + PORTONE)
});

servertwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://losthost:" + PORTTWO)
});