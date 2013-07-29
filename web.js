var express = require('express');
var app = express();
var test= fs.readFileSync('index.html') 


app.use(express.logger());

app.get('/', function(request, response) {
  console.log(test);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
