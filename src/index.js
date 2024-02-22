var express = require('express');
var app = express();
// var taskRouter = require('./routers/task.js');
// var userRouter = require('./routers/user.js');

require('./db/mysql');


app.use(express.json());

// app.use(taskRouter);
// app.use(userRouter);

app.listen(3000, function () {
  console.log('Your port is up at', 3000);
});