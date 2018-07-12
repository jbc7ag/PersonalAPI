'use strict';



module.exports = function(app) {
  


    var controllerError = require('../controllers/httpErrorController');

    // Get LIST OF PERSONAS
    app.route('/noncontent').get(controllerError.non_content);


};
