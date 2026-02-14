function createTask() {
  const list = document.getElementById("listContent");
  var entry = document.createElement("li");
  entry.appendChild(document.createTextNode("listContent"));
  list.appendChild(entry);
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
