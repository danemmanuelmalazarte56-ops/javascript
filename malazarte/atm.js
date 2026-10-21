class Bank {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

   getBalance() {
    return "Current balance: " + this.#balance;
}


    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log("Deposited:", amount);
        } else {
            console.log("Deposit Failed");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient Balance!");
        }
    }
}

const bank = new Bank(5000);

console.log(bank.getBalance());

bank.withdraw(900);

console.log(bank.getBalance());
