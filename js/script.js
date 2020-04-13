const addButton = document.getElementById('submit-touit');
const touitText = document.getElementById('touit-text');
const touitList = document.getElementById('touit-list');
const touiDelete = document.getElementById('delete-touit');



function addNote() {
    const newTouit = document.createElement('li');
    newTouit.textContent = touitText.value;
    touitList.appendChild(newTouit);
};

addButton.addEventListener('click', addNote)
