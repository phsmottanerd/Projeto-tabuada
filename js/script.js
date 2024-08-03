const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operation");

// Funções //
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = ""; // Limpa o conteúdo anterior

    for (let i = 1; i <= multiplicatorNumber; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        const operation = document.createElement("div");
        operation.classList.add("operation");
        operation.textContent = `${number} x ${i} =`;

        const result = document.createElement("div");
        result.classList.add("result");
        result.textContent = number * i;

        row.appendChild(operation);
        row.appendChild(result);

        multiplicationTable.appendChild(row);
    }
};

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});
