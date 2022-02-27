function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let count = 0
  for (let i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned == false){
      count += 1
    }
  }
  return count
}

function getMostCommonGenres(books) {
  let commonGenres = []
  let topFiveGenres = []
  let topFiveObject = {}
  const genres = books.map((book) => book.genre)
  for (let i = 0; i < genres.length; i++){
    if (commonGenres.includes(genres[i]) == false){
      commonGenres.push(genres[i])
      topFiveObject = commonGenres.reduce((result, genre) => {
      result.name = genre
      result.count = 1;
      return result;
      }, {}); 
      topFiveGenres.push(topFiveObject)
    } else {
    let found = topFiveGenres.find((genre) => genre.name == genres[i])
    found.count += 1
   }
  }
  topFiveGenres.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1)
  let topFive = []
  for (let i = 0; i < 5; i++){
    topFive.push(topFiveGenres[i])
 }
  return topFive
}


function getMostPopularBooks(books) {
  let bookObject = {}
  let mostPopBooks = []
  for (let i = 0; i < books.length; i++){
    let name = books[i].title
    let count = books[i].borrows.length
    bookObject = {name, count}
    mostPopBooks.push(bookObject)
  }
  mostPopBooks.sort((bookA, bookB) => bookA.count > bookB.count ? -1 : 1)
  let topFive = []
  for (let i = 0; i < 5; i++){
    topFive.push(mostPopBooks[i])
}
  return topFive
}

function makeTopFive (array){
  let topFive = []
  for (let i = 0; i < 5; i++){
    topFive.push(array[i])
  }
  return topFive
}

function getMostPopularAuthors(books, authors) {
  let authorToBorrowsObject = {}
  let authorToBorrows = []
  let authorsIds = []
  for (let i = 0; i < books.length; i++){
    if (authorsIds.includes(books[i].authorId) == false){
    authorsIds.push(books[i].authorId)
    let name = books[i].authorId
    let count = books[i].borrows.length
    authorToBorrowsObject = {name, count}
    authorToBorrows.push(authorToBorrowsObject)
    } else {
    let found = authorToBorrows.find((author) => author.name == books[i].authorId)
    found.count += books[i].borrows.length
    }  
  }
  authorToBorrows.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1)
  for (let i = 0; i < authorToBorrows.length; i++){
    let found = authors.find((author) => author.id == authorToBorrows[i].name)
    let firstAndLastName = []
    firstAndLastName = [found.name.first, found.name.last]
    authorToBorrows[i].name = firstAndLastName.join(" ")
  }
  return makeTopFive(authorToBorrows)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
