document.getElementById('searchButton').addEventListener('click', searchMovies);

let api_key = '322695747c85e4b0d8a8c8ff7726b790'
let url_base = 'https://api.themoviedb.org/3/search/movie'
let url_img = 'https://image.tmdb.org/t/p/w200'

let getResults = document.getElementById('results')


function searchMovies() {
    getResults.innerHTML = 'Cargando...'

    let searchInput = document.getElementById('searchInput').value

    fetch(`${url_base}?api_key=${api_key}&query=${searchInput}`)
        .then(response => response.json())
        .then(response => displayMovies(response.results))
}

function displayMovies(movies) {
    getResults.innerHTML = ''

    if (movies.length === 0) {
        getResults.innerHTML = '<p> No se encontraron resultados para tu búsqueda </p>'
        return
    }

    movies.forEach(movie => {
        let movieDiv = document.createElement('div')
        movieDiv.classList.add('movie')

        let title = document.createElement('h2')
        title.textContent = movie.title

        let releaseDate = document.createElement('p')
        releaseDate.textContent = 'La fecha del lanzamiento fue: ' + movie.release_date

        let overview = document.createElement('p')
        overview.textContent = movie.overview

        let posterPath = url_img + movie.poster_path
        let poster = document.createElement('img')
        poster.src = posterPath

        movieDiv.appendChild(poster)
        movieDiv.appendChild(title)
        movieDiv.appendChild(releaseDate)
        movieDiv.appendChild(overview)

        getResults.appendChild(movieDiv)
    })
}