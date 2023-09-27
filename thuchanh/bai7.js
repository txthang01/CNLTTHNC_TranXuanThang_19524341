const http = require('http');
const url = require('url');

const port = 8072;

const server = http.createServer((req, res) => {
    // Lấy thông tin từ URL của yêu cầu
    const parsedUrl = url.parse(req.url, true);
    const host = req.headers.host;
    const pathname = parsedUrl.pathname;
    const search = parsedUrl.search;

    // In thông tin vào Terminal
    console.log(`Host: ${host}`);
    console.log(`Pathname: ${pathname}`);
    console.log(`Search: ${search}`);

    // Thiết lập mã trạng thái 200 và kiểu nội dung text/plain
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    // Gửi phản hồi về cho yêu cầu
    res.end('Thông tin đã được hiển thị trong Terminal');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});