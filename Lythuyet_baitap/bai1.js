const http = require('http');

const app = http.createServer((req, res) => {
    // Xử lý yêu cầu ở đây
    if (req.method === 'GET' && req.url === '/') {
        // Lấy ngày tháng năm hiện tại
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;

        // Thiết lập header và nội dung đáp ứng
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end(formattedDate);
    } else {
        // Đáp ứng cho các yêu cầu không phải '/' với mã lỗi 404
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const port = 8031;
app.listen(port, function() {
    console.log('Server listening on http://localhost:' + port);
});