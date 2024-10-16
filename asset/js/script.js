const form = document.querySelector("form");
const listContainer = document.getElementById("list-container");

form.onsubmit = function (event) {
  event.preventDefault();

  const taskName = document.getElementById("taskName");

  listContainer.innerHTML += `
    <li>${taskName.value}<button class="deleteButton">Elimina</button></li>
  `;
  form.reset();
};

listContainer.addEventListener("click", (event) => {
  event.target.classList.toggle("completed");
});

listContainer.addEventListener("click", (event) => {
  const deleteButton = event.target.closest(".deleteButton");
  if (deleteButton) {
    const taskItem = deleteButton.closest("li");
    listContainer.removeChild(taskItem);
  }
});
