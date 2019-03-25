const pgp = require('pg-promise')();
const options = {
    host: 'localhost',
    database: 'restaurants-app'
};

// make connection to the4 database specified by the options object
const db = pgp(options);


db.any('select * from users where id = 1;')
    .then(function(data) {
        console.log(data);
        // success;
    })
    .catch(function(error) {
        // error;
    });