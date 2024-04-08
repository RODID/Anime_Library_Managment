// script.js


function Manga(title, author, publisher, sbn, copies){
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.sbn = sbn;
    this.copies = copies;
}


//This is a library array for the the added Mangas
var library = [];

/*Add function for the Mangas*/
function addManga(){
    var title = document.getElementById("title").value;
    var author = document.getElementById("author").value;
    var publisher = document.getElementById("publisher").value;
    var sbn = document.getElementById("sbn").value;
    var copies = document.getElementById("copies").value;
    var manga = new Manga(title, author, publisher, sbn, copies);
    library.push(manga);

    //After pushing book display it in the library
    displayManga();
    //Updating the list of user manga.
    updateMangaList();
 }

 /* Remove Function fot eh mangas in the list*/
 function removeManga(){
    var sbn = prompt("Enter the SBN of the Manga to remove: ");
    for (var i = 0; i < library.length; i++){
        if (library[i].sbn === sbn){
            library.splice(i, 1);
            break; 
        }
    }
    displayManga();
 }

 function displayManga(){
    var mangaList = document.getElementById("mangaList");
    mangaList.innerHTML = "";
    for(var i = 0; i < library.length; i++){
        var tr  = document.createElement("tr");
        tr.innerHTML =`
            <td>${library[i].title}</td>
            <td>${library[i].author}</td>
            <td>${library[i].publisher}</td>
            <td>${library[i].sbn}</td>
            <td>${library[i].copies}</td>
        `;
    mangaList.appendChild(tr);
    }
 }