const mysql = require('mysql2');

var config = 'mysql://u3nhojkyfzisauwr:nhtMziGpaFlvqnK9yV7s@b2dql3cn1qsogappkey0-mysql.services.clever-cloud.com:3306/b2dql3cn1qsogappkey0'

const connectToDB = () => {
    connection = mysql.createConnection(config)
    connection.connect(function (err) {
        if(err) {
            setTimeout(connectToDB, 2000);
        }
    })
    connection.on('error', (err) => {
        console.log(err)
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            connectToDB();
        }
        else {
            throw err; 
        }
    })
}

module.exports = connectToDB

