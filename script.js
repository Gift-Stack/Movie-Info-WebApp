const getmovieinfo = new getMovieInfo();
const ui = new UI();

document.getElementById("searchInput").addEventListener("keyup", inputFunction);
function inputFunction(e) {
  if (e.target.value === "") {
    ui.clearMovies();
  } else {
    document.getElementById("searchForm").addEventListener("submit", (e) => {
      const search = document.getElementById("searchInput").value;
      getmovieinfo
        .get(search)
        .then((data) => {
          if (data.Response === "True") {
            ui.showMovies(data.Search);
          }
        })
        .catch((err) => (document.body.innerHTML = err));
      e.preventDefault();
    });
  }
}

function selectedMovie(id) {
  sessionStorage.setItem("movieID", id);
  window.location.assign("more.html");
  return false;
}
