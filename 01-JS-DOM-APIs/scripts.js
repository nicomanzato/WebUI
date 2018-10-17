function fetchDataWithXMLHttpRequest(config){
  var request = new XMLHttpRequest();
  return new Promise(function (resolve, reject) {
    request.onreadystatechange = function () {

      // Only run if the request is complete
      if (request.readyState !== 4) return;

      // Process the response
			if (request.status >= 200 && request.status < 300) {
				resolve(request);
			} else {
				reject({
					status: request.status,
					statusText: request.statusText
				});
			}
    };
    request.open(config.method, config.url, config.async);
    request.send();
  });
}

function fetchData(config){
  return fetch(config.url)
    .then(resp => resp.text());
}

function fetchQuery(url, q){
  let query = url + `?q=${q}`;
  return fetch(query)
    .then(resp => resp.text())
}

function fetchRepositories(q){
  fetchQuery("https://api.github.com/search/repositories", document.getElementById("q").value)
    .then(resp => listRepositories(JSON.parse(resp).items));
}

function listRepositories(repositories) {

  let repositoryList = document.getElementById("repository-list");
  let textNode, liNode;

  //Removing previous results
  while (repositoryList.firstChild) {
    repositoryList.removeChild(repositoryList.firstChild);
  }

  for(let i = 0; i < repositories.length ; i++){
    textNode = document.createTextNode(repositories[i].full_name);
    liNode = document.createElement("li");
    liNode.appendChild(textNode);
    repositoryList.appendChild(liNode);
  }
}

function getJokes(){
  let config = {};
  config.url = "http://api.icndb.com/jokes/random";
  config.method = "GET";
  config.async = true;
  fetchDataWithXMLHttpRequest(config).then(addJoke, turnContentRed);
  //fetchData(config).then(addJoke,turnContentRed);
  fadeIn( "jokeSection" );
}

function fadeIn( id ) {
  let elementToFadeIn = document.getElementById(id);
  elementToFadeIn.style.display  = "block";
}

function addJoke( joke ){
  let section = document.getElementById("jokeSection");
  section.style.background = "rgb(128,128,128,0.8)";
  let jokeTextNode = document.createTextNode(parseJokeWithXMLHttpRequest(joke));
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

function parseJokeWithXMLHttpRequest( response ) {
  return JSON.parse(response.responseText).value.joke;
}

function invokeAlert() {
  alert("run like hell !!");
}

window.addEventListener('load', function () {
  fadeIn( "hiddenSection" )
}, false);
