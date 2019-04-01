// require express
const express = require('express');
// set express to app variable
const app = express();
const port = 3000;
// import reviews class
const Review = require('./models/reviews');
const Restaurant = require('./models/restaurants');
//  helper fucnction == "middle-ware" or "request handlers"

app.get('/restaurants', async(req, res) => {
    const allRestaurants = await Restaurant.getAll();
    // res.json does 2 things
    // 1. it converts your Javascript object or array to a json string
    // 2. it puts the correct content-header on the response
    res.json(allRestaurants);
});

app.get('/reviews', async(req, res) => {
    const allReviews = await Review.getAll();
    res.json(allReviews);
});

app.get('/reviews/:id', async(req, res) => {
    const theReview = await Review.getById(req.params.id);
    res.json(theReview);
});
app.listen(port, () => {
    console.log(`server is running at ${port}`);
});
    // if req.url is "/restaurants", send all restaurants
    // if its "/users", send list of all users
    // else if it doesnt match either, send welcome
//     res.statusCode = 200;
//     res.setHeader('content-type', 'application.json');
//     // gets all the reviews from tables
//         } else if (method === "DELETE"){
//             res.end('{message: remove the user}')
//             if(parts.lngth === 3){
//                 const reviewID = parts[2];
//                 await Review.delete(reviewID);
//                 res.end(`{message: Deleted review with id ${reviewID}}`);
//             }
            
//         }


//     } else if (req.url.startsWith("/restaurants")) {
//         const method = req.method;
//         const parts = req.url.split("/");

//         if (method === "GET"){
//             } else if (parts.length === 3) {
//                 const restaurantId = parts[2];
//                 const theRestaurant = await Restaurant.getById(restaurantId);
//                 const restaurantJSON = JSON.stringify(theRestaurant);
//                 res.end(restaurantJSON);
//             } else {
//                 res.statusCode = 404;
//                 res.end('not found');
//             }
//         } else if (method === "POST") {
//             res.end('{message: you dont get anything}');
//         } else if (method === "PUT"){
//             res.end('{message: try another method}')
//         } else if (method === "DELETE"){
//             res.end('{message: remove the user}')
//         }

//     } else {
//         res.end(`{
//             message: the data was is not available at this time.
//         }`)
//     }
// });

