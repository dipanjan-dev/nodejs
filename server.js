const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "localhost";

const server =  http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    const fileRoute = "./views/"
    switch (req.url) {
        case '/':
            fileRoute + "index.html"
            break;
        case '/register':
            fileRoute + "register.html"
            break;
        default:
            fileRoute + "error.html"
            break;
    }
    fs.readFile(fileRoute,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(port,()=>{
    console.log(`the port is running ${port}`)
})