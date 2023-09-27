const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    // Thiết lập mã trạng thái 200 và kiểu nội dung text/html
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Gửi nội dung HTML về cho yêu cầu
    res.end('<html><body><h1>Hello, world! <br> Tran xuan thang </h1></body></html>');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});