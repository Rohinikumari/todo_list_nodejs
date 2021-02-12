let http = require('http');
let fs = require('fs');

// let createReadStream = fs.createReadStream(__dirname + '/readme.txt','utf8');
// let createWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')
// createReadStream.on('data',(chunk)=>{
//     console.log(`new chunk received!!`)
//     console.log(chunk)
//     createWriteStream.write(chunk)
// })
// createReadStream.pipe(createWriteStream)

let server = http.createServer((req,res)=>{
    console.log(`request was made : ${req.url}`);
    //res.writeHead(200,{'Content-Type': 'text/html'})
    //let createReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    //res -> is a writable stream
    //createReadStream.pipe(res)
    // res.end('Hey Ninja')

    //send json
    // let myObj = {name:'Rohini',age:28,job:'software engineer'}
    // res.end(JSON.stringify(myObj)) // res.end() accepts either string or buffer

    // routing
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream(__dirname+'/index.html').pipe(res)
    }else if(req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'})
        fs.createReadStream(__dirname+'/contact.html').pipe(res)
    }else if(req.url === '/api/ninja'){
        let myObj = [{name:'Rohini',job:'IT'},{name:'Lucky',job:'Carpainter'}]
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(myObj))
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        fs.createReadStream(__dirname+'/404.html').pipe(res)
    }
})

server.listen(3000,'127.0.0.1',()=> console.log('server started'))