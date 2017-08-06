var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTFUL API server started on: ' + port);
