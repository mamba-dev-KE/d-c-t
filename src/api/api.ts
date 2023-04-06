import { fetchData } from "@/utils";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getTrendingMovies = async () => {
    const res = await fetchData<{ results: Movies[] }>(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    return res.results
}

export const getTrendingShows = async () => {
    const res = await fetchData<{ results: Shows[] }>(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
    return res.results
}

export const getMovie = async (id?: string) => {
    const res = await fetchData<Movie>(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
    return res
}

export const getShow = async (id?: string) => {
    const res = await fetchData<Movie>(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
    return res
}
