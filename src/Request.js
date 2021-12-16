const API_KEY = "45ec234f1065e1a4ef98c0d863a7c69d";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languange=en-US`,
   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
   fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&languange=en-US`,
   fetchActionyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
   fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
   fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
   fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests;