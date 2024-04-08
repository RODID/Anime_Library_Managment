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

    //Cheacking if all fields are filled
    var allFields = title + author + publisher + sbn + copies;
    if(allFields.trim() === ""){
        alert("Please fill in all the fields before adding a manga!");
        return;
    }
    var manga = new Manga(title, author, publisher, sbn, copies);
    library.push(manga);

    //After pushing book display it in the library.
    displayManga();
    //Updating the list of user manga.
    updateMangaList();
    //Clears the TextFields after the user adds a manga.
    clearTextField();
 }

 /* Removing a Manga using the prompt by typing in the value of the sbn*/
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

 function searchManga(){
    var searchInput = document.getElementById("search").value.ToLowerCase();
    var filteredManga = library.filter(function(manga){
        return manga.title.ToLowerCase().includes(searchInput);
    });
 }

 function displayManga(filteredManga){
    var mangaList = document.getElementById("mangaList");
    mangaList.innerHTML = "";
    //BÖRJA HÄR NÄST
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

 function updateMangaList(filteredManga){
    var mangaItems = document.getElementById("mangaItems");
    mangaItems.innerHTML = "";
    for(var i = 0; i < library.length; i++){
        var li = document.createElement("li");
        li.textContent = library[i].title;
        mangaItems.appendChild(li);
    }
 }

 function clearTextField(){
    document.getElementById("title").value ="";
    document.getElementById("author").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("sbn").value = "";
    document.getElementById("copies").value = "";
 }