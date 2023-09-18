const express = require('express');
const app = express();
const PORT = 2020;

// Middleware để phân tích nội dung từ URL
app.use(express.urlencoded({ extended: true }));

// Route xử lý yêu cầu tùy thuộc vào tham số
app.get('/department/:category', (req, res) => {
    const category = req.params.category;

    let responseText = '';

    if (category === 'lecturer') {
        responseText = 'TranThiMinhKhoa';
    } else if (category === 'student') {
        responseText = 'TranXuanThang_19524341.thang';
    } else {
        responseText = 'Trang không tồn tại';
    }

    res.send(responseText);
});

// Bắt đầu server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});