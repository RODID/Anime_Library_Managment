function Book(title, author, publisher, sbn, copies){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.sbn = sbn;
    this.copies = copies;
}

var library = [];

function addBook(){
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publisher").value;
    var sbn = document.getElementById("sbn").value;
    var copies = document.getElementById("copies").value;
    var book = new Book(title, author, publisher, sbn, copies);
    library.push(book);
    displayBooks();
 }

 function removeBook(){
    var sbn = prompt("Enter the SBN of the book to remove: ");
    for (var i = 0; i < library.length; i++){
        if (library[i].sbn === sbn){
            library.splice(i, 1);
            break; 
        }
    }
    displayBooks();
 }
 function