// bring in the database connection
const db = require('./conn');

// need a User class.
// start classes with an uppercase letter
class User {

    constructor(id, first_name, last_name, email, password){
        this.id = id;
        this.firstName = first_name;
        this.lastName = last_name;
        this.email = email;
        this.password = password;

    }
    // "static" means that the function is something the class can do. but an instance can't.
    static getById(id){
        // .any always returns as array
        // return db.any(`select * from users where id=${id}`);
        // instead use .one
        
        return db.one(`select * from users where id=${id}`)
            .then((userData) => {
                // must use the 'new' keyword when you call a javascript constructor
                const userInstance = new User(userData.id, userData.first_name, userData.last_name, userData.email, userData.password);
                return userInstance;
            })
    }
}
// User.getById(3)
//     .then((user) => {
//         console.log(user);
//     });
// export my user model
module.exports = User; 