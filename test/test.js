// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const User = require('../models/users');
chai.use(chaiAsPromised).should();
// check to make sure mocha is working
// describe('sanity Check', function(){
//     it('should be 2', function (){
//         // assert.equal(2, 1 + 1);
//         expect(1 + 1).to.equal(2);
//     });
// });

describe('Users model', () => {
    it('should be able to retrieve by id', async () => {
        const theUser = await User.getById(3);
        theUser.should.be.an.instanceOf(User);
        // theUser.should.have.length(1);
    });
}); 