const express = require("express");


const app = express();

/*
###################
## Routes Client ##
###################
*/
app.get("/", (request, response) => {
    response.send("Hello World");
});


/*
################
## Routes API ##
################
*/
app.get("/api/list", (request, response) => {
    response.json({
        username: "jcjohan2707",
        age: 20
    });
});


/*
#############
## Run app ##
#############
*/
app.listen(8081, () => {
    console.log("Server on port 8081")
});

