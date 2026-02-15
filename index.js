function createTask() {
  const list = document.getElementById("listContent");
  var entry = document.createElement("li");
  var textInput = document.getElementById("textInput");
  entry.appendChild(document.createTextNode(textInput.value));
  if (textInput.value !== "") {
    list.appendChild(entry);
  }
  textInput.value = "";
}

function clearList() {
  const list = document.getElementById("listContent");
  if (list.hasChildNodes()) {
    while (list.hasChildNodes && list.lastChild !== null) {
      list.removeChild(list.lastChild);
    }
  }
}

function deleteLastElement() {
  const list = document.getElementById("listContent");
  if (list.hasChildNodes()) {
    list.removeChild(list.lastChild);
  }
}
