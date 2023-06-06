const express = require("express");
const server = express();
server.listen(8080);

const cors = require('./middleware/cors.middleware');
const body_parser  = require("./middleware/body_parser.middleware");
const multer = require("./middleware/multer.middleware");
//middleware
server.use(cors);
server.use(body_parser.urlEncoder);
server.use(body_parser.json_encoder);
server.use(multer);


// //enable cors
// const cors = require('cors');
// server.use(cors());

// //receive text data
// const body_parser = require("body-parser");
// const multer = require("multer");
// const multipartt = multer().single("image");

// const urlEncoder = body_parser.urlencoded({extended:false});
// const json_encoder = body_parser.json();
// server.use(urlEncoder);
// server.use(json_encoder);
// server.use(multipartt);

//require routing 
const blogRouting = require("./routing/blog.routing");
const { json_encoder } = require("./middleware/body_parser.middleware");


//middleware route
server.use("/storage",express.static(__dirname+"/storage"));
server.use("/blog",blogRouting);
