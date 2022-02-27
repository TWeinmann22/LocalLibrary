function findAccountById(accounts, id) {
  let accountId = accounts.find((account) => account.id === id)
  return accountId
}

function sortAccountsByLastName(accounts) {
  let accountsAlphabetically = []
  let lastNames = accounts.map((account) => account.name.last)
  lastNames.sort((name1, name2) => name1.toLowerCase() < name2.toLowerCase() ? -1: 1)
  for (let i = 0; i < lastNames.length; i++){
    let accountLN = accounts.find((account) => account.name.last == lastNames[i])
    accountsAlphabetically.push(accountLN)
  }
  return accountsAlphabetically
}

function getTotalNumberOfBorrows(account, books) {
  let count = 0
  let borrows = books.map((book) => book.borrows)
  for (let i = 0; i < borrows.length; i++){
    for (let j = 0; j < borrows[i].length; j++){
      if (borrows[i][j].id == account.id){
        count += 1
        }
      }
    }
  return count
  }
  
function findAuthorById(authors, id) {
  let authorObject = authors.find((author) => author.id == id)
  return authorObject
}

function getBooksPossessedByAccount(account, books, authors) {
  let booksCheckedOut = []
  let booksCheckedOutWithAuthor = []
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned == false){
      if (books[i].borrows[0].id == account.id){
       booksCheckedOut.push(books[i])   
      }
    }
  }
  for (let i = 0; i < booksCheckedOut.length; i++){
    let booksCheckedOutWithAuthorObject = {
      ...booksCheckedOut[i],
      author: findAuthorById(authors, booksCheckedOut[i].authorId)
    }
    booksCheckedOutWithAuthor.push(booksCheckedOutWithAuthorObject)
  }
 
  return booksCheckedOutWithAuthor
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
