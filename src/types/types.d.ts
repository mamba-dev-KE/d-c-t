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

interface Movie {
    adult: boolean;
    backdrop_path: string | null;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    belongs_to_collection?: {
        id: number;
        name: string;
        poster_path: string | null;
        backdrop_path: string | null;
    };
}

interface Shows extends Pick<Movies, "adult" | "backdrop_path" | "id" | "original_language" | "overview" | "poster_path" | "media_type" | "genre_ids" | "popularity" | "vote_average" | "vote_count"> {
    name: string;
    original_name: string;
    first_air_date: string;
    origin_country: string[];
    episode_run_time: number[]
}