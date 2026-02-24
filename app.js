let defaultval = "avenger";

document.getElementById("searchbtn").addEventListener("click", findmovie);

function findmovie() {
    let searchmovie = document.getElementById("searchhere");
    let searchval = searchmovie.value;
    defaultval = searchval;
    getMovie();
}

async function getMovie() {
    let movies = await fetch(`https://www.omdbapi.com/?s=${defaultval}&apikey=7b20a635`)
    movies = await movies.json();

    let omdMovies = document.getElementById("showmoviedetails")
    omdMovies.innerHTML = "";

    if (movies.Response === "False") {
        omdMovies.innerHTML = "<h2>No movies found</h2>";
        return;
    }

    movies.Search.map((movie) => {
        omdMovies.innerHTML += `
        <div class="moviecard">
            <div><h3>${movie.Title}</h3></div>
            <div class="movieimg">
                <img src="${movie.Poster == "N/A" ? "./no_image.jpg" : movie.Poster}">
            </div>
            <div>${movie.Year}</div>
        </div>
        `;
    });
}

getMovie(searchval);