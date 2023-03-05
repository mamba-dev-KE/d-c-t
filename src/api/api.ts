import { fetchData } from "@/utils";

export interface Movies {
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

export interface Shows extends Pick<Movies, "adult" | "backdrop_path" | "id" | "original_language" | "overview" | "poster_path" | "media_type" | "genre_ids" | "popularity" | "vote_average" | "vote_count"> {
    name: string;
    original_name: string;
    first_air_date: string;
    origin_country: string[];

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