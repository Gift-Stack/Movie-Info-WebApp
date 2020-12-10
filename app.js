const getmovieinfo = new getMovieInfo();
const ui = new UI();

let id = sessionStorage.getItem("movieID");
getmovieinfo.getMore(id).then((data) => {
  // console.log(data);
  ui.showMore(data);
});

function previous(title) {
  window.history.back();
  console.log(title);

  // const searchValue = document.getElementById("searchInput").value;
  return false;
}
