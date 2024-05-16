import http from "http";
//arrow function
const server = http.createServer((req, res) => {
res.writeHead(200, {"content-type": "text/plain" });
res.end("servidor do projeto cmo rodando");
});
server.listen(3000, ( ) => {
    console.log ("servidor escutando porta 3000");
});
