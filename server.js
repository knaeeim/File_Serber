const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
const publicdir = path.join(__dirname, 'Public');



const server = http.createServer((req, res) => {

    if(req.url === '/') {
        fs.readFile(path.join(publicdir, 'index.html'), 'utf-8', (err, data)=>{
            if(!err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            } 
        })
    }else if(req.url === '/about.html') {
        fs.readFile(path.join(publicdir, 'about.html'), 'utf-8', (err, data)=>{
            if(!err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            } 
        })
    }else if(req.url === '/contact.html'){
        fs.readFile(path.join(publicdir, 'contact.html'), 'utf-8', (err, data)=>{
            if(!err){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            } 
        })
    }else if(req.url === '/style.css'){
        fs.readFile(path.join(publicdir, 'style.css'), 'utf-8', (err, data)=>{
            if(!err){
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.end(data);
            } 
        })
    }else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1> Not Found </h1>"); 
    }
  });
  
    

  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });