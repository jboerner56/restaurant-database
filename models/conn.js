const pgp = require('pg-promise')({
    query: e => {
    console.log('QUERY: ', e.query);
    }  
});
const options = {
    host: 'localhost',
    database: 'restaurants-app'
};

// make connection to the4 database specified by the options object
const db = pgp(options);
module.exports = db;
