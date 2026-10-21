// class User {
//     #pin;

//     constructor(username, pin) {
//         this.username = username;
//         this.#pin = pin;
//     }

//     getPin() {
//         return this.#pin;
//     }

//     setPin(newPin){
//         if (newPin.length === 4 ) {
//             this.#pin = newPin;
//             console.log("Pin set Successfully");
//         } else {
//             console.log("Invalid Pin");
//         }
//     }

//     checkPin(username, pin) {
//         return this.username === username && this.#pin === pin;
//     }


// }

// const user = new User ("John", "1234");

// console.log(user.checkPin("jandibis", "8888"));
// console.log(user.checkPin("John", "1234"));


class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
        console.log("Diposited:", amount);
        console.log("New Balance:", this.#balance);
    }

    withdraw(amount) {
        if (amount <= this.#balance) {
            this.#balance -= amount;
            console.log("Withdrawn:", amount);
            console.log("New Balance:", this.#balance);
        } else {
            console.log("Withdrawal failed: Insufficient balance.");
        }
    }

    getBalance() {
        return this.#balance;
    }

 }


const account = new BankAccount(1000);

console.log("Initial Balance:", account.getBalance());
console.log("")

account.deposit(500);
console.log("");

account.withdraw(300);
console.log("");

account.withdraw(2000);
console.log("");

console.log("Final Balance:", account.getBalance());
