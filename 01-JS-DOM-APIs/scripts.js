function fetchDataWithXMLHttpRequest(config, successCall, failureCall){
  var req = new XMLHttpRequest();
  req.open(config.method, config.url, config.async);
  req.onreadystatechange = function (aEvt) {
    if (req.readyState == 4) {
       if(req.status == 200)
         successCall(req.responseText);
       else
         failureCall();
    }
  };
  req.send(null);
}

function fetchDataWithPromise(config, successCall, failureCall){
  fetch(config.url)
    .then(resp => resp.text())
    .then(promise => successCall(promise), promise => failureCall(promise));
}

function getJokes(){
  let config = {};
  config.url = "http://api.icndb.com/jokes/random";
  config.method = "GET";
  config.asyc = true;
  fetchDataWithXMLHttpRequest(config, addJoke, turnContentRed);
  fadeIn( "jokeSection" );
}

function fadeIn( id ) {
  let elementToFadeIn = document.getElementById(id);
  elementToFadeIn.style.display  = "block";
}

function addJoke( joke ){
  let section = document.getElementById("jokeSection");
  section.style.background = "rgb(128,128,128,0.8)";
  let jokeTextNode = document.createTextNode(parseJoke(joke));
  section.replaceChild( jokeTextNode, jokeSection.firstChild );
}

function turnContentRed() {
  let section = document.getElementById("jokeSection");
  section.style.background = "red";
  let errorTextNode = document.createTextNode("Error: something bad happened");
  section.replaceChild(errorTextNode , jokeSection.firstChild );
}

function parseJoke( joke ){
  return JSON.parse(joke).value.joke;
}

function invokeAlert() {
  alert("run like hell !!");
}

window.addEventListener('load', function () {
  fadeIn( "hiddenSection" )
}, false);
