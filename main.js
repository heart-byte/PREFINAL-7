let numbers = [];


function insertNumber() {

    let input = document.getElementById("numberInput");

    let number = Number(input.value);

    if (input.value === "" || number <= 0) {

        alert("Please enter a positive number.");

        return;
    }

    numbers.push(number);

    displayNumbers();

    input.value = "";

    input.focus();
}

function displayNumbers() {

    let list = document.getElementById("numberList");

    list.innerHTML = "";

    numbers.forEach(function(number, index) {

        let row = document.createElement("div");

        row.className = "number-row";


        let type;

        if (number % 2 === 0) {

            type = "EVEN";

        } else {

            type = "ODD";
        }


        row.innerHTML =
            number +
            " - " +
            "<span class='" +
            (type === "EVEN" ? "even" : "odd") +
            "'>" +
            type +
            "</span>" +

            " <button class='remove-btn' onclick='removeNumber(" +
            index +
            ")'>Remove</button>" +

            "<button class='edit-btn' onclick='editNumber(" +
            index +
            ")'>Edit</button>";


        list.appendChild(row);

    });
}


function removeNumber(index) {

    numbers.splice(index, 1);

    displayNumbers();
}


function editNumber(index) {

    let newNumber = prompt(
        "Enter new number:",
        numbers[index]
    );


    if (newNumber !== null && newNumber > 0) {

        numbers[index] = Number(newNumber);

        displayNumbers();
    }
}


function clearEntry() {

    document.getElementById("numberInput").value = "";

    document.getElementById("numberInput").focus();
}


function clearItems() {

    numbers = [];

    document.getElementById("numberList").innerHTML = "";

    document.getElementById("result").innerHTML = "";

    document.getElementById("numberInput").value = "";
}


function getTotal() {

    if (numbers.length === 0) {

        document.getElementById("result").innerHTML =
            "No numbers inserted.";

        return;
    }


    let total = 0;


    for (let i = 0; i < numbers.length; i++) {

        total = total + numbers[i];
    }


    document.getElementById("result").innerHTML =
        "Total: " + total;
}


function findHighestLowest() {

    if (numbers.length === 0) {

        document.getElementById("result").innerHTML =
            "No numbers inserted.";

        return;
    }


    let highest = Math.max(...numbers);

    let lowest = Math.min(...numbers);


    document.getElementById("result").innerHTML =
        "Highest Number: " + highest +
        "<br>" +
        "Lowest Number: " + lowest;
}

function sortNumbers() {

    let order =
        document.getElementById("sortOrder").value;


    if (order === "ascending") {

        numbers.sort(function(a, b) {

            return a - b;

        });

    } else {

        numbers.sort(function(a, b) {

            return b - a;

        });
    }


    displayNumbers();
}