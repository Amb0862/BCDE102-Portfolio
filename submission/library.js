class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.available = true;
    }
    check_out(title){
        if(title.available){
            this.available = false;
        }
        else{
            console.log("the book is unavailable or the book is not in the system.")
        }
    }
    return_book(title){
        if(! title.available){
            this.available = true
        }
        else{
            console.log("the book already return or the book is not in the system.")
        }
    }
    toString(){
        return `title: ${this.title}, author: ${this.author}, isbn: ${this.isbn}, available? ${ this.available}`;
    }
};

class Library{
    constructor(){
        this.allBooks = [];
        this.allUser = [];
    }
    add_book(title, author, isbn){
        const newBook = new Book(title, author, isbn)
        this.allBooks.push(newBook)
    }
    find_book_by_isbn(isbn){
        return this.allBooks.find(book => book.isbn === isbn)
    }
}

let book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890');
console.log(Book.toString(book))
book.check_out('The Great Gatsby')
