class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    login(password) {  
        return this.#password === password;
    }

    getPassword(newPassword){
        return this.#password;
    }

    setPassword(newPassword){
        this.#password = newPassword;
            // 12345 === 6789 ; False

    }
}


const user = new User("John Davies", "12345");

console.log("Old Password (Private):", user.getPassword()); // 12345
user.setPassword("6789");

console.log("Username (Public): ", user.username);
console.log("New Password (Private): ", user.getPassword()); // 6789
// Error: Private Field