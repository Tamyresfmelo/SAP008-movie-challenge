

const movieText = document.querySelector("#name-movie");
const btnSearch = document.querySelector("#btn-movie");

btnSearch.addEventListener('click', () => {
    console.log('ok')
    console.log(movieText.value)
    fetch(`https://omdbapi.com/?s=${movieText.value}&apikey=33544276`)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err.message))
})

