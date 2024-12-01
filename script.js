var form = document.getElementById("form");

document.getElementById("reset").addEventListener("click", function() {
    form.reset();
    resultsComplete.style.display = "none";
    resultsEmpty.style.display = "block";
    var errReset = document.querySelectorAll(".error");
    var bgReset = document.querySelectorAll("span");
    var borderReset = document.querySelectorAll("input");

    errReset.forEach(function(e) {
        e.innerText = "";
    });

    document.querySelector(".queryError").innerText = "";

    bgReset.forEach(function(e) {
        // e.style.backgroundColor = "hsl(202, 86%, 94%)";
        // e.style.color = "hsl(200, 24%, 40%)";
        e.classList.remove("errClass");
    });

    borderReset.forEach(function(e) {
        e.classList.remove("errBorder");
    });
})

var amount = document.getElementById("amount");

function formatNumber(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    input.value = value;
}

var term = document.getElementById("term");
var rate = document.getElementById("rate");
var repayOnly = document.getElementById("repay");
var interestOnly = document.getElementById("interest");
var resultsEmpty = document.querySelector(".empty");
var resultsComplete = document.querySelector(".complete");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var amountEntered = getAmount();
    var termEntered = getTerm();
    var rateEntered = getRate();
    var resultTypeChecked = getTypeOfResult();
    var allvaluesEntered = amountEntered && termEntered && rateEntered;
    var mortgageType = resultTypeChecked == "Repayment";
    if(allvaluesEntered && mortgageType) {
        calculateMortgage()
    } else if (allvaluesEntered && !mortgageType) {
        // return (mortgageAmount - totalAmount);
        calculateMortgageInterest();
    }
})

function error(input, errMessage) {
    input.parentElement.querySelector(".error").innerText = errMessage;
    input.parentElement.querySelector("span").classList.add("errClass");
    // input.parentElement.querySelector("span").style.backgroundColor = "hsl(4, 69%, 50%)";
    // input.parentElement.querySelector("span").style.color = "hsl(0, 0%, 100%)";
    input.parentElement.querySelector("input").classList.add("errBorder");
}

function success(input, scsMessage) {
    input.parentElement.querySelector(".error").innerText = scsMessage;
    input.parentElement.querySelector("span").style.backgroundColor = "hsl(202, 86%, 94%)";
    input.parentElement.querySelector("span").style.color = "hsl(200, 24%, 40%)";
}

function getAmount() {
    if(amount.value == "") {
        error(amount, "This field is required");
    } else {
        success(amount, "");
        return amount.value;
    }
}

function getTerm() {
    if(term.value == "") {
        error(term, "This field is required");
    } else {
        success(term, "");
        return term.value;
    }
}

function getRate() {
    if(rate.value == "") {
        error(rate, "This field is required");
    } else {
        success(rate, "");
        return rate.value;
    }
}

function getTypeOfResult() {
    if(repayOnly.checked) {
        document.querySelector(".queryError").innerText = "";
        return repayOnly.value;
    } else if(interestOnly.checked) {
        document.querySelector(".queryError").innerText = "";
        return interestOnly.checked;
    } else {
        document.querySelector(".queryError").innerText = "Please select a mortgage type";
    }
}

function calculateMortgage() {
    var totalAmountAsString = getAmount();
    var totalAmount = parseInt(totalAmountAsString.replaceAll(",",""));
    var termInmonths = getTerm() * 12;
    var ratePerMonth = getRate() / (12 * 100);
    var monthlyPayment = totalAmount * ratePerMonth * Math.pow((1 + ratePerMonth), termInmonths) / (Math.pow((1 + ratePerMonth), termInmonths) - 1);
    var totalPayment = monthlyPayment * termInmonths;
    resultsEmpty.style.display = "none";
    resultsComplete.style.display = "block";
    document.querySelector(".monthly-repay").innerText = "£" + (monthlyPayment.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector(".term-total").innerText = "£" + (totalPayment.toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculateMortgageInterest() {
    var totalAmountAsString = getAmount();
    var totalAmount = parseInt(totalAmountAsString.replaceAll(",",""));
    var termInmonths = getTerm() * 12;
    var ratePerMonth = getRate() / (12 * 100);
    var monthlyPayment = totalAmount * ratePerMonth * Math.pow((1 + ratePerMonth), termInmonths) / (Math.pow((1 + ratePerMonth), termInmonths) - 1);
    var totalPayment = monthlyPayment * termInmonths;
    resultsEmpty.style.display = "none";
    resultsComplete.style.display = "block";
    document.querySelector(".monthly-repay").innerText = "£" + ((monthlyPayment - totalAmount/termInmonths).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    document.querySelector(".term-total").innerText = "£" + ((totalPayment - totalAmount).toFixed(2)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}