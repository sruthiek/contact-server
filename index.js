//import json-server
//here require() is import stmt  in node
const jsonServer = require('json-server')

//create json server apppplication
const server= jsonServer.create()

//set up route for db.json
const router= jsonServer.router("db.json")

//return a middleware used by json server
const middleware=jsonServer.defaults()

//setup port number for server app
const port=process.env.PORT || 3000 

//use router & middleware 
server.use(middleware)
server.use(router)


//to listen the server app in port
server.listen(port,()=>{
    console.log(` contact server app started at ${port} `);
})
