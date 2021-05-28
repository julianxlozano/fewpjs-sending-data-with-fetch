// Add your code here

function submitData(username,useremail){

    let dataObj = {
        "name":"Steve",
        "email":"steve@steve.com"
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify(dataObj)
    };
    return fetch('http://localhost:3000/users',configObj).then(function(response) {
        return response.json();
      }).then(function(object) {
        let body = document.getElementsByTagName('body')[0]
        body.innerHTML = object.id 
      }).catch(function(error){
        let body = document.getElementsByTagName('body')[0]
        body.innerHTML = error.message 
      })
};