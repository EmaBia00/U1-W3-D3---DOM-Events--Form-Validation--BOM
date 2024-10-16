const form = document.querySelector("form");
const input = document.getElementById("taskName");
const button = document.getElementById("addButton");
const ul = document.getElementById("list-container");

form.onsubmit = function (event) {
  event.preventDefault();

  if (input.value.length > 0) {
    const li = document.createElement("li");
    li.innerText = input.value;

    const delateButton = document.createElement("button");
    delateButton.innerText = "Delete";
    delateButton.className = "deleteButton";
    li.appendChild(delateButton);
    ul.appendChild(li);

    li.onclick = (event) => {
      event.currentTarget.classList.toggle("completed");
    };

    delateButton.onclick = (event) => {
      event.currentTarget.closest("li").remove();
    };

    input.value = ""; // Stessa cosa di fare --> form.reset(); cancella il valore dentro l'input immesso dall'utente.
  }
};
