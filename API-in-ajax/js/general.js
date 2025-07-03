'use strict'

const requstData = "https://api.github.com/users/hiteshchoudhary"
const XHR = new XMLHttpRequest();
XHR.open("GET", requstData);
XHR.onreadystatechange = function() {
  
  if (XHR.readyState === 4) {
    const data = JSON.parse(this.responseText);
    console.log(data.name);

    document.querySelector("#DP").src = data.avatar_url
    document.querySelector("#username").innerHTML = data.name
    document.querySelector("#bio").innerHTML = data.bio
    document.querySelector("#location").innerHTML = data.location
    document.querySelector("#followers").innerHTML = data.followers
    document.querySelector("#check").href = data.html_url
  }
}

XHR.send();


