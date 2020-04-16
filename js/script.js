const touitText = document.getElementById('touit-text');
const touitList = document.getElementById('touit-list');
const touitDelete = document.getElementById('delete-touit');
const myForm = document.getElementById('form-touit')
const name = document.getElementById('name')


function addNote(event) {
// Prévient le rechargement de la page à chaque submit
    event.preventDefault();
// Création des éléments du DOM phantôme
    const touitLi = document.createElement('li');
    const newName = document.createElement('small');
    const newTouit = document.createElement('p');
// Relie les informations du DOM et du DOM phantôme 
    touitLi.className = 'touit'; 
    newName.textContent = name.value;
    newTouit.textContent = touitText.value;
// Incrémente les éléments du DOM phantôme dans le DOM 'réél'
    touitList.appendChild(newName)
    touitList.appendChild(newTouit);
    touitList.appendChild(touitLi);
};

myForm.addEventListener('submit', addNote);