var alimentoElement = document.createElement("p");
alimentoElement.textContent = alimento.Nombre;

if (alimento.Alergenico) {
  alimentoElement.classList.add('alergenico');
} else {
  alimentoElement.classList.add('no-alergenico');
}

alimentosContainer.appendChild(alimentoElement);