// script.js

//This is a library array for the the added Mangas
var library = [];

/*Add function for the Mangas*/
function addManga(){
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let publisher = document.getElementById("publisher").value;
    let sbn = document.getElementById("sbn").value;
    let copies = document.getElementById("copies").value;

    //Cheacking if all fields are filled
    const allFields = title + author + publisher + sbn + copies;
    if(allFields.trim() === ""){
        
        alert("Please fill in all the fields before adding a manga!");
        return;
    }
    
    //
    if(library.some(manga => manga.sbn === sbn)){
        alert("A manga witht he same SBN already exists in the library!")
        return;
    }
    let manga = new Manga(title, author, publisher, sbn, copies);
    library.push(manga);

    //After pushing book display it in the library.
    displayManga(library);
    //saving the manga in the list
    saveMangaList();
    //Clears the TextFields after the user adds a manga.
    clearTextField();
 }

 /* Removing a Manga using the prompt by typing in the value of the sbn*/
 function removeManga(){
    let sbn = prompt("Enter the SBN of the Manga to remove: ");
    for (let i = 0; i < library.length; i++){
        if (library[i].sbn === sbn){
            library.splice(i, 1);
            break; 
        }
    }
    displayManga(library);
    saveMangaList();
 }

 function addToFavorites(){
    let sbn = prompt("Enter the SBN of your favorite Manga to add: ")

    for(let i = 0; i < library.length; i++){
        if (library[i].sbn ===sbn){
            library[i].favorite = true;
            break;
        }
    }

    displayManga(library);
    saveMangaList();
}

function mangaList(){
    //öpnar manga-list.html sidan i en ny sida.
    window.open('manga-list.html', '_blank');
}

 function searchManga(){
    let searchInput = document.getElementById("search").value.trim().toLowerCase();

    if (searchInput === ""){
        displayManga(library)
        updateMangaList(library)
        return;
    }

    let filteredManga = library.filter(function(manga){
        return manga.title.toLowerCase().includes(searchInput) ||
               manga.author.toLowerCase().includes(searchInput);
    });

    displayManga(filteredManga);
    updateMangaList(filteredManga);
    saveMangaList();
 }

 function displayManga(filteredManga){
    let mangaList = document.getElementById("mangaList");
    mangaList.innerHTML = "";

    library.forEach(function(manga){

        let tr  = document.createElement("tr");

        if(manga.favorite){
            tr.style.color = "red";
        }

        tr.innerHTML =`
            <td>${manga.title}</td>
            <td>${manga.author}</td>
            <td>${manga.publisher}</td>
            <td>${manga.sbn}</td>
            <td>${manga.copies}</td>
        `;
        
        tr.addEventListener("click", function(){
            console.log("Manga selected: ", manga);
        });
        mangaList.appendChild(tr);
    });
    
 }

 function updateMangaList(filteredManga){

    let mangaItemsElement = document.getElementById("mangaItems");
    mangaItemsElement.innerHTML="";

    filteredManga.forEach(function(manga) {
        let li = document.createElement("li");
        li.textContent = manga.title;
        mangaItemsElement.appendChild(li);
    });
 }


 window.onload = function(){
    let savedLibrary = JSON.parse(localStorage.getItem('library'));
    if (savedLibrary){
        library = savedLibrary;
        displayManga(library)
        updateMangaList(library);
    }
 }

 function saveMangaList(){
    localStorage.setItem('library', JSON.stringify(library));
 }


 function clearTextField(){
    document.getElementById("title").value ="";
    document.getElementById("author").value = "";
    document.getElementById("publisher").value = "";
    document.getElementById("sbn").value = "";
    document.getElementById("copies").value = "";
 }