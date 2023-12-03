const http = require("http")


const todos = [
  {id: 1, text: "todo one"},
  {id: 2, text: "todo two"}
]


const app = http.createServer((req, res) => {
  
  let body = []

  req.on('data', chunk => {
    body.push(chunk)
  }).on('close',() => {

    let status = 404
    let response = {
      success: false,
      data: null,
      error: "Not found resource"
    }


    if(req.method === "GET" && req.url === "/todos"){
      status = 200
      response.success = true
      response.data = todos
      response.error = null
    }else if(req.method === "POST" && req.url === "/todos"){
      let todo = JSON.parse(body)


      if(!todo.id || !todo.text){
        status = 400
        response.success = false
        response.error = "Please type id and text"

      }else{
        todos.push(todo)
        status = 201
        response.success = true
        response.data = todos
        response.error = null
      }
     
    }

    res.writeHead(status, {
      'Content-Type': 'application/json',
      'X-Powered-By': 'Node.js'
    })
    res.end(JSON.stringify(response));


  })
})


const PORT = 5000;

app.listen(PORT, () => console.log("Server run"))