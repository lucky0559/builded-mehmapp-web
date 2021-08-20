const mysql = require('mysql2');



var connection = mysql.createConnection({
   uri: 'mysql://u3nhojkyfzisauwr:nhtMziGpaFlvqnK9yV7s@b2dql3cn1qsogappkey0-mysql.services.clever-cloud.com:3306/b2dql3cn1qsogappkey0'
})

connection.connect (function (err) {
    if(err) {
        console.log('error connecting' + err.stack)
        return;
    }

    console.log('connected as id' + connection.threadId)
})

module.exports = connection

