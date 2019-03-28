const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// import reviews class
const Review = require('./models/reviews');
const Restaurant = require('./models/restaurants');
//  helper fucnction == "middle-ware" or "request handlers"
const server = http.createServer(async (req, res) => {
    console.log(req.url);

    // if req.url is "/restaurants", send all restaurants
    // if its "/users", send list of all users
    // else if it doesnt match either, send welcome
    res.statusCode = 200;
    res.setHeader('content-type', 'application.json');
    // gets all the reviews from tables
    if(req.url.startsWith("/reviews")) {

        const method = req.method;

        const parts = req.url.split("/");
        console.log(parts);
        // when the req.url is "/reviews", part is ['', 'reviews']
        // when req.url is "users/3", parts is ['', reviews, '3']
        if (method === "GET"){
            if (parts.length === 2) {
                const allReviews = await Review.getAll();
                const reviewJSON = JSON.stringify(allReviews);
                res.end(reviewJSON);
            } else if (parts.length === 3) {
                const reviewID = parts[2];
                // the id will be parts[2]
                const theReview = await Review.getById(reviewID);
                // get the user id
                const reviewJSON = JSON.stringify(theReview);
                res.end(reviewJSON);
            } else {
                res.statusCode = 404;
                res.end('not found');
            }

        } else if (method === "POST") {
            res.end('{message: you dont get anything}');
        }


    } else if (req.url === "/restaurants"){
    
        const allRestaurants = await allRestaurants.getAll();
        const restaurantJSON = JSON.stringify(allRestaurants);
        res.end(restaurantJSON);

    } else {
        res.end(`{
            message: the data was is not available at this time.
        }`)
    }
});

server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}, ${port}`);
});