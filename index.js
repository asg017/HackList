
var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('static'));


app.use('/', require('./routes/normal.js'));
app.use('/api', require('./routes/api.js'));

app.listen( process.env.PORT || 8080, function () {
  console.log('Server listening success on ' + (process.env.PORT || 8080));
});
