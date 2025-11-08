
// Both do the same task
// fetch -> sendOut the request and get back the response 

// using promises 
function main() {
    fetch("https://sum-server.100xdevs.com/todos")
    .then ( async (response) => {
        const json = await response.json();
        console.log(json.todos.length);
    })
}

// using asynchronous function
 async function main() {
        const response = await fetch("https://sum-server.100xdevs.com/todos", {
            method:"PUT"
        });
        const json = await response.json();
        console.log(json.todos.length);
        
}