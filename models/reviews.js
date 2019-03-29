const db = require('./conn');
class Review {
    constructor(id, score, content, restaurant_id, user_id){
        this.id = id;
        this.score = score;
        this.content = content;
        this.restaurantId = restaurant_id;
        this.userId = user_id;
    }
    static getById(id){
        // .any returns 0 or more results in an array
        // its async so we need to "return" the call to db.any
        return db.one(`select * from reviews where id=${id}`)
            .then((reviewData) => {
                return new Review(
                    reviewData.id,
                    reviewData.score,
                    reviewData.content,
                    reviewData.restaurant_id,
                    reviewData.user_id
                );
            });
    }
    static delete(id) {
        return db.result(' delete form users where id=$1'[id]);
        
    }
    static add(userData){
        // insert new data into the database
        // dont use ${} so it cant be interpolated
        // 
        return db.one(`
        insert into reviews 
            (score, content, restaurant_id, user_id) 
        values 
            ($1, $2, $3, $4)
            returning id`, 
            [reviewData.score, reviewData.content, reviewData.restaurant_id, reviewData,user_data])
            .then((data) => {
                console.log(`user id: id ${data}`);
                return data.id;
            })


        // return the id of the new user
    }
    static getAll() {
        return db.any(`select * from reviews`)
            .then ((arrayOfReviews) => {
                return arrayOfReviews.map((reviewData) => {
                    const aReview = new Review(
                        reviewData.id,
                        reviewData.score,
                        reviewData.content,
                        reviewData.restaurant_id,
                        reviewData.user_id
                    );
                    return aReview;
                });
            });
    }
}
module.exports = Review;