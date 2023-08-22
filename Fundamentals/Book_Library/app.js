
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

const myLibrary = ['The Hobbit', 'The Name of the Wind', 'The Crown Conspiracy', 'Legends & Lattes'];

const bookshelf = document.querySelector('.bookshelf');
const addBookBtn = document.querySelector('.add-book-btn')

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

addBookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log
})

const addBookToLibrary = () => {
    for(let i = 0; i < myLibrary.length; i++){
        const newBook = document.createElement('div');
        newBook.innerText = myLibrary[i];
        bookshelf.appendChild(newBook);
    }
}

addBookToLibrary();