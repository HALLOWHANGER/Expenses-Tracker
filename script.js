let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

//Set Budget Part
totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;
  //empty or negative input
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    //Set Budget
    amount.innerHTML = tempAmount;
    //Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    //Clear Input Box
    totalAmount.value = "";
  }
});

//Function To Disable Edit and Delete Button

//Function To Add Expenses


// FUNCTION FOR THE EXPORT FEATURE 
const exportButton = document.getElementById("export-btn");

exportButton.addEventListener("click", () => {
  const listItems = document.querySelectorAll(".sublist-content");

  const totalBudget = amount.innerText;
  const totalExpenses = expenditureValue.innerText;
  const remainingBalance = balanceValue.innerText;

  let content = `Budget Summary:\n`;
  content += `• Total Budget: $${totalBudget}\n`;
  content += `• Total Expenses: $${totalExpenses}\n`;
  content += `• Remaining Balance: $${remainingBalance}\n\n`;
  content += `Expense List:\n`;

  if (listItems.length === 0) {
    content += "(No expenses recorded)\n";
  } else {
    listItems.forEach(item => {
      const title = item.querySelector(".product").innerText;
      const amount = item.querySelector(".amount").innerText;
      content += `• ${title}: $${amount}\n`;
    });
  }

  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "budget-summary.txt";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});




