function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  let files = evt.dataTransfer.files; // FileList object.
  let ul = document.createElement("ul");

  for (var i = 0, f; f = files[i]; i++) {

    let li = document.createElement("li");
    let textNode = document.createTextNode(escape(f.name));

    ul.appendChild(textNode);
  };

  document.getElementById("list").appendChild(ul);
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);
