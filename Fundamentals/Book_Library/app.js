//constructor function to make books

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages, 
    this.read = read,
    this.info = function() {
        return `The book ${title}, written by ${author}, contains ${pages} pages, and ${read}.`
    }
};

const theNameOfTheWind = new Book('The Name of the Wind', 'Patrick Rothfuss', 675, 'has been read');

console.log(theNameOfTheWind.info());    