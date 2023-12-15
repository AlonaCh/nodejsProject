'use strict';

(function () {

    document.addEventListener('DOMContentLoaded', init);

    async function init() {
        try {
            const data = await fetch('/all');
            const result = await data.json();
            const resultset = document.getElementById('resultset');

            for (const product of result) {
                const tr = document.createElement('tr');
                tr.appendChild(createCell(product.productId));
                tr.appendChild(createCell(product.name));
                tr.appendChild(createCell(product.model));
                tr.appendChild(createCell(product.price));
                tr.appendChild(createCell(product.type));
                resultset.appendChild(tr);
            }

        }
        catch (err) {
            console.log(err)
        }
    }
    function createCell(data) {
        const td = document.createElement('td');
        td.textContent = data;
        return td;
    }
}
)();