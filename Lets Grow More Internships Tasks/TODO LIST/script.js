const listContainer = document.getElementById("listContainer");
const input = document.getElementById("input");

// Click function

function addTask() {
  if (input.value === "") {
    alert("Please Enter any task in the List Container !");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

// Javasacript for the list container

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //while target the tagname should be capital
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// local storage

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
