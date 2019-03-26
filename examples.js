const db = require('./conn');
// get all info for user based on id #
function getUserById(theId){

return db.any(`select * from users where id = ${theId};`)
}
// getUserById(1).then(console.log);


// async functions can use the keyword "await" 
// async function main(){
//     // await + async
//     const user3 = await getUserById(3); // "await" waits for promises
//                                         // its like implicit ".then"
//     console.log(user3);

//     // promises.
// //     getUserById(3)
// //         .then(function(user3){
// //             console.log(user3);
// //         })
// // }
// main();

// async function main2(){
//     const idArray = [1,2,3,4];
//     idArray.forEach(async function(id){
//         const user = await getUserById(id);
//         console.log(user)
//     });
// }
// main2();


// async function main3(){
//     const idArray = [1,2,3,4];
//     const userArray = [];
//     idArray.forEach(async function(id){
//         const user = await getUserById(id);
//         userArray.push(user);
//     });
//     console.log(userArray);
//     return userArray;
// }
// const theUsers = main3();
// console.log(theUsers);

async function main4(){
    const idArray = [1,2,3,4];

    const userPromiseArray = idArray.map(function(id){
        return getUserById(id);
    });

    return Promise.all(userPromiseArray);
}
main5()
    .then(function(userArray){
        console.log(userArray);
    })

async function main5(){
    const user3 = await getUserById(3);
    const user4 = await getUserById(4);

    console.log(user3);
    console.log(user4);
}
main5();

// get all info for restaurant by id #
// function getRestInfoById(id){
//     return db.any(`select * from restaurants where id = ${id}`)
// }
// getRestInfoById(1).then(console.log);
