const jsonServer = require('json-server')

const empServer = jsonServer.create()

//json to js conversion
const middleware = jsonServer.defaults()

const router = jsonServer.router('db.json')

const port = 4000 || process.env.port

empServer.use(middleware)
empServer.use(router)

empServer.listen(port,()=>{
    console.log('listening on port' +port);
})