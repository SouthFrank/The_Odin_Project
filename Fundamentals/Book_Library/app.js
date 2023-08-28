const myLibrary = [];

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
        const bookInfo = document.createElement('div');
        // const bookRemove = document.createElement('div');

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
        bookDelete.innerText = 'X';
        bookDelete.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })

        bookInfo.appendChild(bookTitle);   
        bookInfo.appendChild(bookAuthor);   
        bookInfo.appendChild(bookPages);   
        bookInfo.appendChild(bookHaveRead);  
        // bookRemove.appendChild(bookDelete); 
        newBook.appendChild(bookInfo);
        newBook.appendChild(bookDelete);
        bookshelf.appendChild(newBook);

        myLibrary.forEach(book => console.log(book));
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


