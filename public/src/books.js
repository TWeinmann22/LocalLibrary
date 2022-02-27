function findAuthorById(authors, id) {
  let authorObject = authors.find((author) => author.id == id)
  return authorObject
}

function findBookById(books, id) {
  let bookObject = books.find((book) => book.id == id)
  return bookObject
}

function partitionBooksByBorrowedStatus(books) {
  let booksCheckReturned = []
  let checkedOut = []
  let returned = []
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned == true){
      returned.push(books[i])
    } else {
      checkedOut.push(books[i])
    }
  }
  console.log(checkedOut)
  booksCheckReturned = [checkedOut, returned]
  return booksCheckReturned
}

function getBorrowersForBook(book, accounts) {
  let borrowersOfBook = []
  let ids = []
  for (let i = 0; i < book.borrows.length; i++){
    let found = accounts.find((account) => account.id == book.borrows[i].id)
    found.returned = book.borrows[i].returned
    if (borrowersOfBook.length < 10){
      borrowersOfBook.push(found)
    }
  }
  return borrowersOfBook
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
