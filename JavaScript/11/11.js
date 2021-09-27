
//!----TABLE----
let rowCount = 2;
let cellCount = 2;

const table = document.querySelector('#sampleTable');


const updateRender = () => {

    const fragment = document.createDocumentFragment();

    const rows = document.createElement('table');
    rows.border = '1';

    for (let row = 0; row < rowCount; row++) {
        const tr = document.createElement('tr');

        for (let N = 0; N < cellCount; N++) {
            const td = document.createElement('td');

            td.textContent = `Row-${row + 1} ` + `Cell-${N + 1}`;
            tr.appendChild(td);
        }

        rows.appendChild(tr);
    }

    fragment.appendChild(rows);

    table.removeChild(table.firstChild)
    table.appendChild(fragment);
}

updateRender()


//!----EVENTS----
const input = document.querySelector('#input');
const btnInsert = document.querySelector('#btnInsert');
const btnRemove = document.querySelector('#btnRemove');


input.addEventListener('input', e => {

    input.value = input.value.replace(/\D/g, '')

    if (input.value >= 10)
        input.value = 10;

    if (input.value <= 1)
        input.value = 1;
})

btnInsert.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (input.value >= 1) {
        cellCount = input.value;
        rowCount += 1;
        updateRender();
    }
})

btnRemove.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();

    if (rowCount > 0)
        rowCount -= 1;
    updateRender();
})