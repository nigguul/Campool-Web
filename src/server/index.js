var http = require("http")
const { default: next } = require("next")
const PORT = process.env.PORT || 8080
const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    http.createServer((req, res) => {
        //console.log(req.url)
        
        var url = req.url

        const dir = {
            '/riot.txt' : ((req, res) => {
                res.writeHead(200, {'Content-Type' : 'text/plain'})
                res.write("62e61d2d-b471-4f8b-8699-f00ecb23a781")
                res.end()
            }),
            '/login' : ((req, res) => {

            }) 
        }
    
        if (dir[url] == undefined) {
            handle(req, res)
        } else {
            dir[url](req, res)
        }

    }).listen(PORT)
})