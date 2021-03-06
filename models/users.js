// bring in the database connection
const db = require('./conn');
const Review = require('./reviews');
const bcrypt = require('bcryptjs');
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
            .catch(() => {
                return null; // signal an invalid value
            })
    }
    // no "static" since this is an individual "instance method"
    // (it belongs to an individual instance)
    save() {
        // use .result when you might want a report about how many rows were effected
        // must return so it can be used
        return db.result(`
        update users set 
            first_name='${this.firstName}',
            last_name='${this.lastName}',
            email='${this.email}',
            password='${this.password}'
        where id=${this.id}
        `)
    }

    setPassword(newPassword) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(newPassword, salt);
        this.password = hash;
    }
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
    getReviews(){
        return db.any(`select * from reviews where user_id=${this.id}`)
            .then((arrayOfReviewData) =>{
                const arrayOfReviewInstances = [];

                    arrayOfReviewData.forEach((data) => {
                        const newInstance = new Review(
                            data.id,
                            data.score,
                            data.content,
                            data.restaurant_id,
                            data.user_id
                        );
                        arrayOfReviewInstances.push(newInstance);
                    });

                return arrayOfReviewInstances;
            })
    }


}
// User.getById(3)
//     .then((user) => {
//         console.log(user);
//     });
// export my user model
module.exports = User; 