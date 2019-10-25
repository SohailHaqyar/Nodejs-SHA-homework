//Let's Recap the whole shit LBL :

const http = require('http');
//So there we required the http package;
// 127.0.0.1
const host = 'localhost';
//here we defined a host in this case local host which is equal to line 6 ;

const port = 8080;
//here we defined the port which is apparently every 1000 sorta like number ;

const server = http.createServer((req, res) => {     //Create server
    
    if (req.url == '/state') { //if the root is in //contact
        res.writeHead(200, {'Content-Type': 'text/html'})//we write : so specify the text type
        res.end('<html> <body> <h1> OK CUNT The Number is 10 by order you should go add then subtract then reset do not try shit okay</h1></body></html>') //we deliver the content of our write head basically
    }else if(req.url == '/add'){
        res.writeHead(200 , {'Content-Type' : 'text/html'})
        res.end('<html> <body> <h1> OK Just Added so now its 11</h1></body></html>')
    }

    else if(req.url == '/subtract'){
        res.writeHead(200 , {'Content-Type' : 'text/html'})
        res.end('<html> <body> <h1> OK You just subtracted the state so now its 10</h1></body></html>')
    }
    else if(req.url == '/reset'){
        res.writeHead(200 , {'Content-Type' : 'text/html'})
        res.end('<html> <body> <h1> OK you just reset the state so now its 10</h1></body></html>')
    }else{
        res.writeHead(404 , {'Content-Type' : 'text/html'})
        res.end('<html> <body> <h1> Error : 404,  fuck you that does not exist Bitch you think you are funny little bitch</h1></body></html>')
    }
        
   
});

server.listen(port, host, () => { //I have not idea how this his working?//
    console.log(`The server is at http : //${host}:${port}/`)
})
// with the homework 
let state = 10;







