function BankAccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.balance = +balance;
  this.accountNumber = Date.now();

  this.deposit = (amount) => {
    this.balance += amount;
  };
  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}
BankAccount();

// const shivangAccount = new BankAccount("shivang", 5000);
// const janakAccount = new BankAccount("Janak", 4000);

// console.log(shivangAccount);
  // console.log(janakAccount);
//

// Create Account

const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const accounts = [];

accountForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const account = new BankAccount(customerName.value, balance.value);
  accounts.push(account);
  console.log(balance.value);
  console.log(accounts);
});

// Deposit

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amountDeposit = document.querySelector("#amountDeposit");

depositForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  
  account.deposit(+amountDeposit.value);
  console.log(accounts);
});

// Deposit

const withdrawForm = document.querySelector("#withdrawForm");
const amountWithdraw = document.querySelector("#amountWithdraw");


withdrawForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const account = accounts.find(
    (account) => account.accountNumber === +accountNumber.value
  );
  console.log(amountWithdraw);
  console.log(+amountWithdraw.value);

  
  account.withdraw(+amountWithdraw.value);
  console.log(accounts);
});
         



      