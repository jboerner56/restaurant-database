// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const User = require('../models/users');
const Restaurants = require('../models/restaurants');
const Review = require('../models/reviews');

// section for restaurant tests
// add describe block
describe('Restaurant model', () => {
    it('should be able to grab an array of restaurants', async () => {
        const arrayOfRestaurants = await Restaurants.getAll();
        expect(arrayOfRestaurants).to.be.instanceOf(Array);
    });
});
    // test for user that is in the data
describe('Users model', () => {
    it('should be able to retrieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
        // theUser.should.have.length(1);
    });
        // test for when the user id is not in the data

    describe('Users model', () => {
        it('should error if no user by id', async () => {
            const theUser = await User.getById(10);
            expect(theUser).to.be.null;
            // theUser.should.be.an.instanceOf(User);
            // theUser.should.have.length(1);
        });
    }); 
    it('should update the user', async () => {
        // grab a user with id 2
        const theUser = await User.getById(2);
        // grab the current value for the email field
        theUser.email = 'new@new.com';
        // save the user
        await theUser.save();
        // re-grab the user witj id 2
        const alsoTheUser = await User.getById(2);
        // expect the email to equal the new value
        expect(theUser.email).to.equal('new@new.com');
        // theUser.save()
        //     .then(async (report) => {
        //         const alsoTheUser = await User.getById(2);
        //         expect(alsoTheUser.email).to.equal('new@new.com');
        //     });
    });
    it('should encrypt the password', async () =>{
        // get user with id 1
        const theUser = await User.getById(1);
        // set their password field to "bacon"
        theUser.setPassword("bacon");
        // compare their password to "bacon"
        expect(theUser.password).not.to.equal("bacon");
        // it should be false
    });
    it('should be able to check for correct passwords', async () => {
        // get a user with id 1
        const theUser = await User.getById(1);
        // set their password field to "bacon"
        theUser.setPassword("bacon")
        // save them to the database
        await theUser.save();
        // get them back out of the database
        const sameUser = await User.getById(1);
        // ask them if their password is bacon
        const isRightPassword = sameUser.checkPassword("bacon")
        expect(isRightPassword).to.be.true;

        const wrongPassword = sameUser.checkPassword("veges")
        expect(wrongPassword).to.be.false;
    });
}); 

describe('Reviews model', () => {
    // can i get one review
    it('should be able to retrieve a review by id', async() =>{
        // 
        const theReview = await Review.getById(2); 
        expect(theReview).to.be.an.instanceOf(Review);
    });
    // can i get all reviews
    it('should be able to retrieve all reviews', async() => {
        const allReviews = await Review.getAll();
        expect(allReviews).to.be.an.instanceOf(Array);
        // makre sure each of them is an array
        // use a for loop, so the exception does not get swallowed by a .forEach callback.
        for(let i=0; i < allReviews.length; i++){
            expect(allReviews[i]).to.be.an.instanceOf(Review);
        }
    });
    // can i get a review by user
});
describe('users and reviews', () => {
    it('a user instance should be able to retrieve all their reviews', async () => {
        // get a user by id
        const theUser = await User.getById(1);
        // then get all their reviews
        const theReviews = await theUser.getReviews();
        // confirm that their reviews are in an array
        expect(theReviews).to.be.an.instanceOf(Array);
        // each array is the correct length, should be 1
        expect(theReviews).to.be.lengthOf(1);
        // each one is an instance of reviews
        for(let i = 0; i<theReviews.length; i++){
            expect(theReviews[i]).to.be.an.instanceOf(Review);
        }

    })
});
