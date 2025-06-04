const etchContainer = document.querySelector("div");

function createGrid(size) {
  etchContainer.textContent = "";
  const createSqSize = 599 / size;
  for (let i = 0; i < size * size; i++) {
    const createSq = document.createElement("div");
    createSq.style.height = `${createSqSize}px`;
    createSq.style.width = `${createSqSize}px`;
    createSq.style.backgroundColor = "white";

    etchContainer.appendChild(createSq);

    createSq.addEventListener("mouseover", () => {
      createSq.style.backgroundColor = "black";
    });
    createSq.addEventListener("mouseover", () => {
      changColor(createSq);
    });
  }
}

createGrid(32);
