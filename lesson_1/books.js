/* let book1 = {
  title: 'Mythos',
  author: 'Stephen Fry',
  getDesription() {
    return `${this.title} was written by ${this.author}.`
  }
}
let book2 = {
  title: 'Me Talk Pretty One Day',
  author: 'David Sedaris',
  getDesription() {
    return `${this.title} was written by ${this.author}.`
  }
}
let book3 = {
  title: 'Aunts aren\'t Gentlemen',
  author: 'PG Wodehouse',
  getDesription() {
    return `${this.title} was written by ${this.author}.`
  }
} */

let createBook = function(title, author, read = false) {
  return {
    title: title,
    author,
    read,
    getDescription() {
      return `${this.title} was written by ${this.author}. ` +
             `I ${this.read ? "have" : "haven't"} read it.`
    },
    readBook: function() {
      this.read = true;
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse');

console.log(book1.read);
book1.readBook();
console.log(book1.read);

console.log(book1.getDescription());  // "Mythos was written by Stephen Fry."
console.log(book2.getDescription());  // "Me Talk Pretty One Day was written by David Sedaris."
console.log(book3.getDescription());  // "Aunts aren't Gentlemen was written by PG Wodehouse"
