const addButton = document.getElementById('submit-touit')
const touitText = document.getElementById('touit-text')
const touitList = document.getElementById('touit-list')


addButton.addEventListener("click", function() {
    const newTouit = document.createElement('li');
    newTouit.textContent = touitText.value;
    touitList.appendChild(newTouit);
});