class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited: $", amount);
    }

    display() {
        console.log("Owner: ", this.owner);
        console.log("Balance: ", this.balance);
        console.log("------------");
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn: ", amount)
        } else {
            console.log("Insufficient Balance!")
        }
    }
   
    transfer(account, amount) {
        if (amount <= this.balance) {
            this.balance -= amount; // referrring from John Davis
            account.balance += amount // referring to Mary
            console.log("Transferred: ", amount)
        }
    }

}

const account1 = new BankAccount("John Davis", 5000);
const account2 = new BankAccount("Mary", 0 );

account1.display();