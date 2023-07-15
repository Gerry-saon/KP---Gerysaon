const http =  require('http');

const requestListener =  (request, response) => {
    const { method } = request;

    response.setHeader('Content-type', 'text/html');

    if (method === 'GET') {
        response.end("<h1> Ini adalah tugas unjuk keterampilan BE-KP-Kelas.com");
    }
}
const server = http.createServer();

const port = 8080;

const host = 'localhost';

server.listen(port, host, () => {
    console.log(`server sedang berjalan pada http://${host}:${port}`);
})