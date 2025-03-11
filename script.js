function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        let expression = document.getElementById("display").value;
        let result = eval(expression);
        document.getElementById("display").value = result;
        addToHistory(expression + " = " + result);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function addToHistory(entry) {
    let historyList = document.getElementById("history-list");
    let listItem = document.createElement("li");
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}
