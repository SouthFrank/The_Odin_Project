
// function Book(title, author, pages, read) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages, 
//     this.read = read,
//     this.info = function() {
//         return `The book ${title}, written by ${author}, contains ${pages} pages, and ${read}.`
//     }
// };

// const theNameOfTheWind = new Book('The Name of the Wind', 'Patrick Rothfuss', 675, 'has been read');

// console.log(theNameOfTheWind.info());    

const myLibrary = [];
// 'The Hobbit', 'The Name of the Wind', 'The Crown Conspiracy', 'Legends & Lattes'

const bookshelf = document.querySelector('.bookshelf');
const bookFormBtn = document.querySelector('.book-form-btn');
const newBookBtn = document.querySelector('#new-book-btn');

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

const addBookToLibrary = () => {
        const libraryIndex = myLibrary[myLibrary.length - 1];
        const newBook = document.createElement('div');
        newBook.classList.add('book-item');
        const bookTitle = document.createElement('h2');
        const bookAuthor = document.createElement('h3');
        const bookPages = document.createElement('h3');
        const bookHaveRead = document.createElement('h3');
        const bookDelete = document.createElement('div');
        bookDelete.classList.add('book-delete');
        bookTitle.innerText = libraryIndex.title;
        bookAuthor.innerText = libraryIndex.author;
        bookPages.innerText = libraryIndex.pages;
        bookHaveRead.innerText = libraryIndex.read;
        newBook.appendChild(bookTitle);   
        newBook.appendChild(bookAuthor);   
        newBook.appendChild(bookPages);   
        newBook.appendChild(bookHaveRead);  
        newBook.appendChild(bookDelete); 
        bookshelf.appendChild(newBook);
};

bookFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log
});

newBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const bookItem = new Book(e.target.form[0].value, e.target.form[1].value, e.target.form[2].value, e.target.form[3].value)
    myLibrary.push(bookItem);
    console.log(myLibrary[0].title);
    addBookToLibrary();
})



// const holes = new Book('Holes', 'C.H. Hue', 375, true);
// myLibrary.push(holes);

// addBookToLibrary();