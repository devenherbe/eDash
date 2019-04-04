var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.fortnitetracker.com/v1/profile/pc/Eligrive");
xhr.setRequestHeader("TRN-Api-Key", "d3d1a67c-8e55-42b9-90fe-ae32bb72b800");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.setRequestHeader("Postman-Token", "a4b3e0e1-73b1-416e-8f49-826b522c9530");

xhr.send(data);

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.fortnitetracker.com/v1/profile/pc/Eligrive",
    "method": "GET",
    "headers": {
      "TRN-Api-Key": "d3d1a67c-8e55-42b9-90fe-ae32bb72b800",
      "cache-control": "no-cache",
      "Postman-Token": "435077ad-8f08-4fba-9db4-0c23de46628d"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });