var Response
var myHeaders = new Headers()
var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default'
              };

fetch('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=Eligrive',myInit)
.then(function(response) {
  return response.blob();
})


  
