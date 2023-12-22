'use strict';

(function () {

    let idField;
    let nameField;
    let modelField;
    let priceField;
    let typeField;
    let resultarea;

    document.addEventListener('DOMContentLoaded', init);

    function init() {
        resultarea = document.getElementById('resultarea');
        idField = document.getElementById('id');
        nameField = document.getElementById('name');
        modelField = document.getElementById('model');
        priceField = document.getElementById('price');
        typeField = document.getElementById('type');

        document.getElementById('submit').addEventListener('click', send);

        idField.addEventListener('focus', clear);
    }

    function clear() {
        idField.value = '';
        nameField.value = '';
        modelField.value = '';
        priceField.value = '';
        typeField.value = '';
        resultarea.textContent = '';
        resultarea.removeAttribute('class');
    }

    async function send() {
        const product = {
            productId: +idField.value,
            name: nameField.value,
            model: modelField.value,
            price: priceField.value,
            type: +typeField.value
        };

        try {
            const options = {
                method: 'POST',
                body: JSON.stringify(product),
                headers: { 'Content-Type': 'application/json' }
            };
            const data = await fetch('/addProduct', options); //???
            const result = await data.json();

            updateStatus(result)
        }
        catch (err) {
            updateStatus({ message: err.message, type: 'error' });
        }
    } //end of send

    function updateStatus(status) {
        resultarea.textContent = status.message;
        resultarea.setAttribute('class', status.type);
    }

})();