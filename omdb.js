class getMovieInfo {
  constructor() {
    this.api_key = "ea9f7920";
  }
  async get(title) {
    const movieResponse = await fetch(
      `http://www.omdbapi.com/?apikey=${this.api_key}&s=${title}`
    );
    const movieData = await movieResponse.json();
    return movieData;
  }
  async getMore(id) {
    const moreRes = await fetch(
      `http://www.omdbapi.com/?apikey=${this.api_key}&i=${id}&plot=short`
    );
    const moreData = await moreRes.json();
    return moreData;
  }
}
