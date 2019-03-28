const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// import reviews class
const Review = require('./models/reviews');
//  helper fucnction == "middle-ware" or "request handlers"
const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'application.json');
    // gets all the reviews from tables
    const allReviews = await Review.getAll();
    // needs to be turned into a string so the browser can display it
    const allReviewsJSON = JSON.stringify(allReviews)
    res.end(allReviewsJSON);
});

server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname}, ${port}`);
});