describe('Book', function() {
    let book;
    beforeEach(function() {
        book = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '1234567890');
    });

    it('should check out the book', function() {
        book.check_out();
        expect(book.available).toBe(false);
    });
});

describe('Library', function() {
 let library;
 let book;
 beforeEach(function() {
 library = new Library();
 book = new Book('1984', 'George Orwell', '9876543210');
 });
 it('should add a book to the library', function() {
 library.add_book(book);
 expect(library.books.length).toBe(1);
 expect(library.books[0].isbn).toBe('9876543210');
 });
});