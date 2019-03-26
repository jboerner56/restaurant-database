// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();
const User = require('../models/users');
const Restaurants = require('../models/restaurants');

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
        // get a user with id # 2
        const theUser = await User.getById(2);
        // update the email
        theUser.email = "thenewemail@bing.com"
        // save the user
        theUser.save()
            .then(async(report) => {
                // console.log(report);
                const alsoTheUser = await User.getById(2);
        // expect the email to be equal to the value
        expect(alsoTheUser.email).to.equal('thenewemail@bing.com')
            });
    });
}); 

