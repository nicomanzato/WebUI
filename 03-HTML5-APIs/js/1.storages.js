// 1. Storages: IndexedDB Implementation
var db;

const openIndexedDB = (callback) => {
  var openRequest = indexedDB.open('test_db', 1);
  openRequest.onupgradeneeded = function(e) {
    var db = e.target.result;
    console.log('running onupgradeneeded');
    if (!db.objectStoreNames.contains('store')) {
      var storeOS = db.createObjectStore('store', {keyPath: 'id', autoIncrement: true});;
    }
  };
  openRequest.onsuccess = function(e) {
    console.log('running onsuccess');
    db = e.target.result;
    callback();
  };
  openRequest.onerror = function(e) {
    console.log('onerror!');
    console.dir(e);
  };
}

const storeWithIndexedDB = (textToSave) => {

  var transaction = db.transaction(['store'], 'readwrite');
  var store = transaction.objectStore('store');
  var item = {
    value: textToSave
  };

 var request = store.add(item);

 request.onerror = function(e) {
    console.log('Error', e.target.error.name);
  };
  request.onsuccess = function(e) {
    console.log('Woot! Did it');
  };
}

const readWithIndexedDB = () => {
  var transaction = db.transaction(["store"]);
  var objectStore = transaction.objectStore("store");
  var request = objectStore.getAll();
  request.onerror = function(event) {
    // Handle errors!
  };
  request.onsuccess = function(event) {
    // Do something with the request.result!
    let result = request.result;
    document.getElementById("textToSave").value = result[result.length - 1].value;
  };
}

// 1. Storages: Local Storage Implementation

const storeWithLocalStorage = (key, value) => {
  localStorage.setItem(key, value);
}

const readWithLocalStorage = key => {
  return localStorage.getItem(key);
}

document.getElementById("saveButton").addEventListener("click", () => {

  //storeWithLocalStorage("textToSave", document.getElementById("textToSave").value);
  storeWithIndexedDB(document.getElementById("textToSave").value);
});

window.addEventListener('load', function () {

  let textArea = document.getElementById("textToSave");
  //textArea.value = readWithLocalStorage("textToSave");

  openIndexedDB(readWithIndexedDB);
}, false);
