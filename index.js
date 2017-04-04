
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));


app.use('/', require('./routes/normal.js'));
app.use('/api', require('./routes/api.js'));

app.listen(8080 || process.env.PORT, function () {
  console.log('Server listening success on ' + (8080 || process.env.PORT));
});
