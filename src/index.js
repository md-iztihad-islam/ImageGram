import express from 'express';
import connectDB from './config/dbConfig.js';
import apiRouter from "./routers/apiRouter.js";

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.use("/api", apiRouter);//if any request comes to /api, then use the apiRouter to handle the request. That means, if the url starts with /api, then use the apiRouter to handle the request.

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});


/*

app.use("/posts", postRouter);//if the  url starts with /posts, then use the postRouter to handle the request.

app.use("/api/v1/users", userRouter);//if the url starts with /users, then use the userRouter to handle the request.

function m1(req, res, next){
    console.log("Middleware 1");
    next();
}

function m2(req, res, next){
    console.log("Middleware 2");
    next(); // if we comment out this line, the request will hang and will not be passed to the next middleware function. So, the request will go on but no response will come as request will halt at m2.
}

function m3(req, res, next){
    console.log("Middleware 3");
    next();
}




app.post("/posts", m1, m2, m3, createPost); //this line is acting as a routing layer -> any post request comming to /post is being routed to createPost.

//m1, m2, m3 are middleware functions. They are called in the order they are passed in the app.post() function. It is a chain of middleware functions.


*/


/*

Now these parts are in routers layer

app.post("/posts", s3uploader.single("image"), createPost);//it will do single file upload. It will upload the file with the name "image" in the request body.

app.get("/allposts", getAllPosts);

app.get('/post/:id', getPostById);

app.delete("/post/delete/:id", getDeletePostById);

app.get('/ping/:name', (req, res) => {
    const name = req.params.name;
    res.json({message: "pong" + " " + name});
});

app.get('/ping02', (req, res) => {
    console.log(req.query);
    return res.json({message: "pong" + " " + req.query.name});
});

app.get('/ping03', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    return res.json({message: "pong" + " " + req.query.name});
});

*/