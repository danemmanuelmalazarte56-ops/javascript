class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  login(username, password) {
    if (this.username === username && this.#password === password) {
        console.log("Login Successfully!");
    } else {
        console.log("Password or Username is Incorrect")
    }
  }
}

const user = new User("John Davis", "123456");

user.login("John Davis", "123456"); //SAKTO
user.login("John Mark", "123456"); // DI
user.login("Davis Mark", "123456"); // DI
user.login("Davis Davis", "12346") // DI
