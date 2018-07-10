'use strict';


exports.list_all_personal = function(req, res) {
  
    var config = require('../../dbconfig'); //importing DB CONFIG
    
    // connect to your database
    var sql = require("mssql");

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from dbo.[TABLE_NAME]', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });

    
};