const http = require('http');
const fs = require('fs');

// Tạo một đối tượng server HTTP
const server = http.createServer((req, res) => {
    // Lấy URL yêu cầu từ trình duyệt
    const url = req.url;

    // Kiểm tra xem yêu cầu có phải là favicon.ico không (yêu cầu mặc định của trình duyệt)
    if (url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        fs.createReadStream('favicon.ico').pipe(res);
        return;
    }

    // Mặc định trang web là 'index.html' nếu không có tham số tên trang
    let page = 'index.html';

    // Phân tích URL để lấy tham số tên trang web (nếu có)
    const queryParams = new URLSearchParams(url.split('?')[1]);
    if (queryParams.has('page')) {
        page = queryParams.get('page');
    }

    // Đọc nội dung của trang web từ tệp và trả về cho trình duyệt
    fs.readFile(page, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Lắng nghe trên cổng 8080
const port = 8080;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});