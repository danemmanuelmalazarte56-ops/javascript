 class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class Library {
    constructor(name) {
        this.name = name;
    }
}

class Borrower {
    constructor(name, book, library, days) {
        this.name = name;
        this.book = book;
        this.library = library;
        this.days = days;
    }

    display(name, book, author, libray, days) {
        console.log("Name: ", this.name);
        console.log("Book: ", this.book.title);
        console.log("Author: ", this.book.author);
        console.log("Library: ", this.library.name);
        console.log("Days: ", this.days);

    }
}

const book1 = new Book("Just JS!", "Just Python");
const library1 = new Library("CM Library");
const student1 = new Borrower("John Davies",book1, library1, 5);


student1.display();

