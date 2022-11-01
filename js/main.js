let budget_input = document.getElementById("enter-budget")
let calculateBtn = document.getElementById("calculate")
let budget = document.querySelector(".budget h2:last-child")
let expenses = document.querySelector(".expenses h2:last-child")
let balance = document.querySelector(".balance h2:last-child")
let expense_title = document.getElementById("expense-title")
let expense_value = document.getElementById("expense-value")
let add_expense = document.getElementById("add-expense")
let expense_info = document.querySelector(".expense-info")



calculateBtn.addEventListener("click", function () {
    if (budget_input.value != "") {
        budget.innerText = `${budget_input.value}`
        balance.innerText = `${eval(`${budget.innerText}-${expenses.innerText}`)}`
        if (balance.innerText < 0) {
            balance.style.color = "red"
        }
        else {
            balance.style.color = "green"
        }
        budget_input.value = ""   
    }
    else{
        alert("olmaz")
    }
})

add_expense.addEventListener("click", function () {
    if (expense_value.value != "" && expense_title.value != "") {
        let div = document.createElement("div")
        div.classList.add("expense-item", "mt-2")
        div.innerHTML = `<h5>${expense_title.value}</h5> <h5 class="deleted">${expense_value.value}</h5> <div class="action-icons"> <div id="update-icon"> <i class="fa-solid fa-pen-to-square"></i> </div> <div id="delete-icon"> <i class="fa-solid fa-trash"></i> </div> </div>`
        let deleter = div.lastElementChild.lastElementChild
        let updater = div.lastElementChild.firstElementChild
        deleter.addEventListener("click", function(){
            this.parentNode.parentNode.remove()
            expenses.innerText = `${eval(`${expenses.innerText}-${this.parentNode.previousElementSibling.innerText}`)}`
            balance.innerText = `${eval(`${balance.innerText}+${this.parentNode.previousElementSibling.innerText}`)}`
    
        })
        updater.addEventListener("click", function(){
            this.parentNode.parentNode.remove()
            expenses.innerText = `${eval(`${expenses.innerText}-${this.parentNode.previousElementSibling.innerText}`)}`
            balance.innerText = `${eval(`${balance.innerText}+${this.parentNode.previousElementSibling.innerText}`)}`
            expense_value.value = this.parentNode.previousElementSibling.innerText
            expense_title.value = this.parentNode.previousElementSibling.previousElementSibling.innerText
    
        })
        expense_info.appendChild(div)
        expenses.innerText = `${eval(`${expenses.innerText}+${expense_value.value}`)}`
        balance.innerText = `${eval(`${budget.innerText}-${expenses.innerText}`)}`
        if (balance.innerText < 0) {
            balance.style.color = "red"
        }
        else {
            balance.style.color = "green"
        }
        expense_title.value = ""
        expense_value.value = ""   
    }
    else{
        alert("olmaz")
    }
})
