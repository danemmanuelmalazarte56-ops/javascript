const students = [ 
    { id: 1, name: "Sei", course: "BSIT", year: 1, age: 20, enrolled: true},
    { id: 2, name: "Anna", course: "BSIT", year: 2, age: 21, enrolled: true},
    { id: 3, name: "Muta", course: "BSN", year: 2, age: 19, enrolled: false},
    { id: 4, name: "Bucay", course: "BSN", year: 4,  age: 19, enrolled: true},
]

students.push({ //add element to the beginning of the array
    id: 5, name: "Neeh", course: "BSIT", year: 4, age: 19, enrolled: true
}) 

const filteredStudents = students.filter(student => student.enrolled === true)

students.forEach(student =>  {
    console.log(student.name, "-", student.course, "-", `Year: ${student.year}`)
});


console.log("Total Students: ", students.length)
console.log("Enrolled Students: ", filteredStudents.length)


