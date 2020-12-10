class UI {
  constructor() {
    this.refNo = "fn_al_tt_1";
  }
  showMovies(movies) {
    this.clearMovies();
    const row = document.createElement("div");
    row.className = "row";
    document.getElementById("movies").appendChild(row);
    movies.forEach((movie) => {
      document.querySelector(".row").innerHTML += `
        <div class="col-md-3">
          <div class="card mb-3">
            <img src="${movie.Poster}" class="img-fluid ">
            <div class="card-body" style="height: 150px;>
              <h6 class="text-center mx-auto">${movie.Title}</h6>
              <a onclick="selectedMovie('${movie.imdbID}')" class="btn btn-primary btn-block moreDetails">More</a>
            </div>
          </div>
        </div>
    `;
    });
  }
  showMore(more) {
    document.getElementById("more").innerHTML = `
    <div class="container">
      <div class="card card-body">
        <div class="row">
          <div class="col-md-6">
            <img src="${more.Poster}" class="img-fluid">
          </div>
          <div class="col-md-6">
            <h3>${more.Title}</h3>
            <div class="list-group">
              <div class="list-group-item">Genre: ${more.Genre}</div>
              <div class="list-group-item">Released: ${more.Released}</div>
              <div class="list-group-item">Rated: ${more.Rated}</div>
              <div class="list-group-item">IMDB Rating: ${more.imdbRating}</div>
              <div class="list-group-item">Writer: ${more.Writer}</div>
              <div class="list-group-item">Actors: ${more.Actors}</div>
            </div>
          </div>
        </div>
        <div class="card card-body mt-4">
          <h3> Plot </h3>
          <p class="lead">${more.Plot}</p>
          <hr>
          <div class="btn-group">
            <a href="https://www.imdb.com/title/${more.imdbID}/?ref_=${this.refNo}" target="_blank" class="btn-primary btn-lg mr-3" role="button">View on IMDB</a>
            <a onclick="previous('${more.Title}')" class="btn-secondary btn-lg" role="button">Back to search</a>
          </div>
        </div>
      </div>
    </div>
  `;
  }
  clearMovies() {
    document.getElementById("movies").innerHTML = "";
  }
}
