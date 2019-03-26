const db = require('./conn');
// get all info for user based on id #
async function getUserById(theId){

return await db.any(`select * from users where id = ${theId};`)
}
// getUserById(1).then(console.log);

async function main(){
    // await + async
    const user3 = await getUserById(3);
    console.log(user3);

    // promises.
//     getUserById(3)
//         .then(function(user3){
//             console.log(user3);
//         })
// }
main();

// get all info for restaurant by id #
function getRestInfoById(id){
    return db.any(`select * from restaurants where id = ${id}`)
}
getRestInfoById(1).then(console.log)


// 