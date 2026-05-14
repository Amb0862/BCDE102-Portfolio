<<<<<<< HEAD
class User{
    constructor(userID, name, email, password,role){

    }
    registerUser(){

    }

    updateUser(){

    }
    deleteUser(){

    }
}

class Member{
    constructor(membershipID){
        this.borrowedBooks = []
    }
    borrowedBooks(){

    }

    returnBook(){

    }

    checkBorrowingStatus(){

    }
}

class Librarian{
    constructor(){

    }
    addBook(){

    }
    updateBook(){

    }
    deleteBook(){

    }
    registerUser(){

    }
    updateUser(){

    }
    deleteUser(){

    }
}

class Book{
    constructor(bookID, title, author, genre, ISBN, location, description){
        this.availability = true;
    }
    seachBooks(){

    }
    viewBookDetails(){
    }
    //toString(){}
};

class Catalogue{
    constructor(){
        this.books = [];
    }
    addBook(){

    }
    updateBook(){

    }
    deleteBook(){

    }
    seachBooks(){

    }
}

class BorrowingRecord{
    constructor(recordID, borrowedBook, borrower, borrowDate, dueDate, returnDate, status){

    };
    createRecord(){

    }
    updateRecord(){

    }
    checkOverdue(){

    }
}

class Notification{
    constructor(notificationID, user,message, status){

    }
    sendOverdueNotification(){

    }

}
class Reservation{
    constructor(reservationId, reservedBook, reservingMember, reservationDate, status){
        
    }
    createReservation(){

    }
    cancelReservation(){

    }
    checkReservationStatus(){
        
    }
}
=======
class User{
    constructor(userID, name, email, password,role){

    }
    registerUser(){

    }

    updateUser(){

    }
    deleteUser(){

    }
}

class Member{
    constructor(membershipID){
        this.borrowedBooks = []
    }
    borrowedBooks(){

    }

    returnBook(){

    }

    checkBorrowingStatus(){

    }
}

class Librarian{
    constructor(){

    }
    addBook(){

    }
    updateBook(){

    }
    deleteBook(){

    }
    registerUser(){

    }
    updateUser(){

    }
    deleteUser(){

    }
}

class Book{
    constructor(bookID, title, author, genre, ISBN, location, description){
        this.availability = true;
    }
    seachBooks(){

    }
    viewBookDetails(){
    }
    //toString(){}
};

class Catalogue{
    constructor(){
        this.books = [];
    }
    addBook(){

    }
    updateBook(){

    }
    deleteBook(){

    }
    seachBooks(){

    }
}

class BorrowingRecord{
    constructor(recordID, borrowedBook, borrower, borrowDate, dueDate, returnDate, status){

    };
    createRecord(){

    }
    updateRecord(){

    }
    checkOverdue(){

    }
}

class Notification{
    constructor(notificationID, user,message, status){

    }
    sendOverdueNotification(){

    }

}
class Reservation{
    constructor(reservationId, reservedBook, reservingMember, reservationDate, status){
        
    }
    createReservation(){

    }
    cancelReservation(){

    }
    checkReservationStatus(){
        
    }
}
>>>>>>> f947d0536b138f2fe791bd82736bb133b1936dc4
