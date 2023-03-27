
let http = require('http');
let url = require('url');

http.createServer((request, response) => {

response.writeHead(200,{'content-type':'text-plain'})

response.end('hello world');

}).listen(3000, (err)=>{
    if (err) {
        console.log(err)
    }else{
        console.log('servidor rodando na porta 3000')
    }
})








// let args = process.argv.slice(2)
// let matematica = require('funcoes-matematicas');


// let a = Number(args[0]);
// let b = Number(args[1]);


// console.log(matematica.calcularMultiplicacao(a,b)/10)
