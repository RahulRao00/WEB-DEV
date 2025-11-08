
const axios = require("axios");
// this is library to handle the request-response cycle in better way as compare to the fetch 
// data returned by default in the json formate no need to convert it into the json 


   async function main() {
        const response = await axios.get("https://sum-server.100xdevs.com/todos");
        console.log(response.data.todos.length);
        
    }

    