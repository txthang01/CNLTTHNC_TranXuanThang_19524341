const http = require('http');
const { sensitiveHeaders } = require('http2');
const url = require('url');

const port = 8085;

const server = http.createServer((req, res) => {

    // Parse URL từ yêu cầu
    const parsedUrl = url.parse(req.url);

    // Lấy phần path của URL (sau tên miền)
    const path = parsedUrl.pathname;

    // Thiết lập mã trạng thái 200 và kiểu nội dung text/html
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // Gửi phần path của URL về cho yêu cầu

    res.end(`Trần Xuân Thắng: ${path}`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});