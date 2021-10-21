const apiURL = "http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items/";
console.log("Hello")

axios.get(apiURL)
    .then(response => console.log(response) )
    .catch(error => console.log(error))


