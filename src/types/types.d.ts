interface Movie {
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

interface Show extends Pick<Movie, 'adult' | 'backdrop_path' | 'id' | "original_language" | "overview" | "poster_path" | "media_type" | "genre_ids" | "popularity" | "vote_average" | "vote_count"> {
    name: string;
    original_name: string;
    first_air_date: string;
    origin_country: string[];
    // episode_run_time: number[]

}
interface MovieDetails {
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

interface ShowDetails extends Pick<MovieDetails, "backdrop_path" | "id" | "genres" | "overview" | "popularity" | "status" | "tagline" | "vote_average" | "vote_count" | "production_companies" | "poster_path" | "original_language" | "production_countries" | "spoken_languages"> {
    adult: boolean;
    created_by: {
        id: number;
        credit_id: string;
        name: string;
        gender: number;
        profile_path: string | null;
    }[];
    episode_run_time: number[];
    first_air_date: string;
    homepage: string;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string | null;
    };
    name: string;
    next_episode_to_air: null;
    networks: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_name: string;
    seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string | null;
        season_number: number;
    }[];
    type: string;
}
