window.onload = function() {
    // Hämta mangan från lagrad space
    let savedLibrary = JSON.parse(localStorage.getItem('library'));
    let mangaListElement = document.getElementById("mangaList");

    // ser till om det finns manga i listan
    if (savedLibrary && savedLibrary.length > 0) {
        // loopa igenom varje manga som finns i listan
        savedLibrary.forEach(function(manga) {
            // skapa en list item för varje manga
            let li = document.createElement("li");
            // bekrivning för varje parameter
            li.textContent = `${manga.title} by ${manga.author}, published by ${manga.publisher}, SBN: ${manga.sbn}, Copies: ${manga.copies}`;
            // Append listan til en ul element
            mangaListElement.appendChild(li);
        });
    } else {
        // displaya meddelande om ingen manga finns
        mangaListElement.innerHTML = "<li>No mangas found</li>";
    }
};