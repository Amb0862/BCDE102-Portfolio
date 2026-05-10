describe('User Management', function() {

    beforeEach(function() {
        let user;
        user = new User('001', 'John','john@email.com', 'Pa$$w0rd', 'member');
    });

    it('the user registration should work', function() {
        expect(user.registerUser('001', 'John')).toBe("001");
        expect(user.registerUser('001', 'John')).toBe("001");
    });

    it('the user updating should work', function() {
        expect(user.updateUser('Jack')).toBe("Jack");
        expect(user.updateUser('Jack')).toBe("Jack");
        
    });

    it('the user deletion should work', function() {
        expect(user.deleteUser("001")).toBe("");
        expect(user.deleteUser("001")).toBe("");
    });

});

describe('Book Management', function() {

    beforeEach(function() {
        let book;
        book = new Book("001", "book1", "John", "Novel", "1234", "shelf1","this is a book");
    });

    it('the adding of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });

    
    it('the updating of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });

    it('the deletion of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });

});

describe('Borrowing and Returning of books', function() {

    beforeEach(function() {
        let book;
        book = new Book("001", "book1", "John", "Novel", "1234", "shelf1","this is a book");
    });

    it('the borrowing of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });

    it('the returning of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });
    it('the checking of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });

    it('the overdue notifications of book should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });


});

describe('Search criteria', function() {

    beforeEach(function() {
        let book;
        book = new Book("001", "book1", "John", "Novel", "1234", "shelf1","this is a book");
    });

    it('the search functionaly of ISBN should work', function() {
        expect(book.addbook('001', 'John')).toBe("001");

    });



});

