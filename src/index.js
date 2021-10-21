const express = require("express");
const path = require("path");
const axios = require('axios');
const morgan = require('morgan');

const app = express();
let data

const apiURL = "http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items/";



const logger = (request, response, next) => {
    console.log("Request receved");
    next();
} 

/*
######################
# Get List Resources #
######################
*/
const getListResources = () => axios.get(apiURL)
  .then((response) => {
    console.log(response);
    data = response;
  })
  .catch( error => console.error(error));




/*
#################
## Middlewares ##
#################
*/
app.use(express.json());
app.use(logger);
app.use(express.static(__dirname + "/public"));



/*
###################
## Routes Client ##
###################
*/
app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + "/pages/index.html"));
});


/*
################
## Routes API ##
################
*/
app.get("/api/list", (request, response) => {
    getListResources();

    response.json(data);
});

app.post("/api/list", (request, response) => {
    console.log(request.body);
    console.log(request.params);

    response.send("RECEIVED");
});

app.post("/api/list/:id", (request, response) => {
    console.log(request.body);
    console.log(request.params);

    response.send("RECEIVED");
});

app.delete("/api/list/:id", (request, response) => {
    console.log(request.body);
    console.log(request.params);

    response.send(`Delete resource with id ${request.params.id}`);
});

/*
#############
## Run app ##
#############
*/
app.listen(8081, () => {
    console.log("Server on port 8081")
});

