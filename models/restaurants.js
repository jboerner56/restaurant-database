// connect to the database
const db = require('./conn');

// declare the class
class Restaurant{
    // getall is a static method
    static getAll(){
        // .any returns 0 or more results in an array
        // its async so we need to "return" the call to db.any
        return db.any(`select * from restaurants`);
    }
}

// export the class
module.exports = Restaurant;