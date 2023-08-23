const express = require('express');
const app = express();
app.get('/ping', (request, response) => {
    response.send('hongthu');
});
app.listen(8080, 'localhost');