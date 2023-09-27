const { exec } = require('child_process');
const path = require('path');

// Đường dẫn đến tệp cần mở
const filePath = 'thang.txt'; // Thay thế bằng đường dẫn tới tệp của bạn

// Sử dụng lệnh mở tệp trong terminal của Windows
exec(`start ${filePath}`, { shell: true }, (error, stdout, stderr) => {
    if (error) {
        console.error(`Lỗi: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Lỗi chuẩn lỗi: ${stderr}`);
        return;
    }
    console.log(`Tệp ${path.basename(filePath)} đã được mở.`);
});