import { fetchData } from "@/utils";

interface Movies {
    adult: boolean;
    backdrop_path: string | null;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string | null;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface Shows {

}

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getTrendingMovies = async () => {
    const res = await fetchData<{ results: Movies[] }>(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    return res.results
}

export const getTrendingShows = async () => {
    const res = await fetchData<{ results: Shows[] }>(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`)
    return res.results
}