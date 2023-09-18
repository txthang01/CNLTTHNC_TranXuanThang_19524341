const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8071;

const server = http.createServer((req, res) => {
    // Xác định đường dẫn tới tệp HTML bạn muốn phục vụ
    const filePath = path.join(__dirname, 'index.html');

    // Đọc nội dung từ tệp HTML
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            // Thiết lập mã trạng thái 200 và kiểu nội dung text/html
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // Gửi nội dung từ tệp HTML về cho yêu cầu
            res.end(data);
        }
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});