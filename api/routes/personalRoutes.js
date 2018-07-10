'use strict';



module.exports = function(app) {
  

    var personal = require('../controllers/personalController');

    // Get LIST OF PERSONAS
    app.route('/personal').get(personal.list_all_personal);


};
