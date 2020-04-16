const touitList = document.getElementById('touit-list');
const myForm = document.getElementById('form-touit')
const touitText = document.getElementById('touit-text');
const name = document.getElementById('name')

function addNote(event) {
// Prévient le rechargement de la page à chaque submit
    event.preventDefault();
// Création des éléments du DOM phantôme
    const touitLi = document.createElement('li');
    const newName = document.createElement('small');
    const newTouit = document.createElement('p');
    const newBtn = document.createElement('button');
// Récupère les info de l'html, css et du DOM
    touitLi.className = 'touit'; 
    newBtn.className = 'remove-touit'
    newName.textContent = name.value;
    newTouit.textContent = touitText.value;
// Incrémente les éléments du DOM phantôme dans le DOM 'réél'
    touitLi.appendChild(newName);
    touitLi.appendChild(newBtn);
    touitLi.appendChild(newTouit);
    touitList.appendChild(touitLi);

// Permet de supprimer un touit
    newBtn.addEventListener('click', function() {
        touitList.removeChild(touitLi);
    });
};

myForm.addEventListener('submit', addNote);