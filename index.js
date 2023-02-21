// Add your code here
function submitData(name, email) {
    const data = {
        name: `${name}`,
        email: `${email}`
    };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    })        
       .then(function (response) {
        return response.json();
       })
       .then(function (object) {
        document.body.textContent = object.id;
       })
       .catch(function (error) {
        document.body.textContent = error.message;
       })
    }