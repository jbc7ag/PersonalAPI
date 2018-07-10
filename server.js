var express = require('express'),
  app = express(),
  port = Number(process.env.PORT|| 3000);


bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {

   
   res.json("Ingresa a una liga correcta");

});


var routes = require('../PersonalAPI/api/routes/personalRoutes'); //importing route
routes(app); //register the route


app.listen(port);
console.log('RESTful API server started on: ' + port);