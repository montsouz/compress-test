
let express = require('express');
const app = express();
const port = 3000;

app.use(express.static(".", { maxAge: 2592000 }));

app.listen(port, function () {
    console.log('Running on port ' + port + '.')
});
