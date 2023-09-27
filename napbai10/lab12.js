const express = require('express');
const app = express();

// Viết mã lệnh tao restfull cho phương thức get/post/put/delete để quản lý danh sách user

app.use(express.json());

const users = [{
        id: 1,
        name: 'Nguyen Van A',
        age: 20
    },
    {
        id: 2,
        name: 'Nguyen Van B',
        age: 21
    },
    {
        id: 3,
        name: 'Nguyen Van C',
        age: 22
    }
];


app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.send(user);
    } else {
        res.status(404).send('User not found');
    }
});

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(user);

    const result = {
        success: true,
        message: 'Them thanh cong',
        data: users
    }
    res.send(result);
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = {
        id: parseInt(id),
        name: req.body.name,
        age: req.body.age
    }
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users[index] = user;
        res.send({
            success: true,
            message: 'Cap nhat thanh cong',
            data: users
        });
    } else {
        res.status(404).send({
            success: false,
            message: 'User not found'
        });
    }
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex(user => user.id === parseInt(id));
    if (index !== -1) {
        users.splice(index, 1);
        res.send({
            success: true,
            message: 'Xoa thanh cong',
            data: users
        });
    } else {
        res.status(404).send({
            success: false,
            message: 'User not found'
        });
    }
});

app.listen(8022);