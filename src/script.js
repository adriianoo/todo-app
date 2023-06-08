const newTask = document.getElementById("new-task-input");
const listContainer = document.getElementById("list-container");

function addTask() {

  if(newTask.value === '') {
    alert("Bitte etwas eingeben!");   // alert wenn nix eingegeben worden ist
  }

  else {
    let li = document.createElement("li");    // HTML Element li wird erstellt
    li.innerHTML = newTask.value;             // Input des Users wird in Variable gespeichert
    listContainer.appendChild(li);            // Input wird ausgegeben in listContainer id
  }
  newTask.value = '';   // Input-Box wird nach eingeben empty sein

}

listContainer.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
})