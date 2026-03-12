class Book{
    title;
    author;
    pages;
    isavailable;
    constructor(title,author,pages,isavailable=true){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isavailable=isavailable
    }
    borrow(){
      if(this.isavailable){
        this.isavailable=false;
        console.log(`${this.title} has been borrowed`)
      }
      else{
        console.log(`${this.title} is already borrowed`);
      }

    }
    returnBook() {
        this.isavailable = true;
        console.log(`${this.title} has been returned`);
    }

    getInfo(){
        return `The ${this.title} by ${this.author} (${this.pages}pages)`
    }
    isLongBook(){
        if(this.pages>300){
            return true
        }
        return false;
    }

}
let b1=new Book("Harry Potter","the Hobbit","250")
let b2=new Book("Dennis ritchie","C language","340")
let b3=new Book("Stroustrup","C++","199")
let b4 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let b5 = new Book("1984", "George Orwell", 328);
let books = [b1, b2, b3, b4, b5];
for (let book of books) {
    console.log(book.getInfo());
}
console.log("\n----- Borrowing Books -----");
b1.borrow();
b3.borrow();
console.log(b1.title, "Available:", b1.isavailable);
console.log(b3.title, "Available:", b3.isavailable);
b1.returnBook();
console.log(b1.title, "Available:", b1.isavailable);
let longCount = 0;
for (let book of books) {
    if (book.isLongBook()) {
        longCount++;
    }
}
console.log("\nNumber of long books:", longCount);
console.log("\n----- Available Books -----");
for (let book of books) {
    if (book.isavailable) {
        console.log(book.title);
    }
}