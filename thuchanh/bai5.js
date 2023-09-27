const http = require('http');
const url = require('url');

const port = 8089;

const server = http.createServer((req, res) => {
    // Parse URL từ yêu cầu
    const parsedUrl = url.parse(req.url, true);

    // Lấy các tham số từ URL
    const queryParams = parsedUrl.query;

    // Thiết lập mã trạng thái 200 và kiểu nội dung text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // Gửi các tham số và giá trị của chúng về cho yêu cầu dưới dạng văn bản
    res.end(`Tham số trong yêu cầu: ${JSON.stringify(queryParams)}`);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});