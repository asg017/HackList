
var express = require('express');
var app = express();

app.use('/', require('./routes/normal.js'));
app.use('/api', require('./routes/api.js'));

app.listen(process.env.PORT || 8000, function () {
  console.log('Server listening success on ' + (process.env.PORT || 8000));
});
