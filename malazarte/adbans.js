const students = [
    { name: "Anna", username: "stu2", password: "stu2" },
    { name: "John", username: "stu1", password: "stu1" },
]

function login(inputUsername, inputPassword) {
    console.log("logging In...")
    setTimeout(() => {
        const user = students.find(student => student.username === inputUsername && student.password === inputPassword)
        if(user) {
            console.log(`Logged In. Welcome, ${user.name}!`)
        } else {
            console.log("Wrong Credentials!")
        }
    }, 2000);
}

login("stu1", "stu1")