// Generated by https://quicktype.io

export interface MarkAsFavoriteResponse {
    status_code:    number;
    status_message: string;
}

// Generated by https://quicktype.io

export class FavoriteDto {
    media_type: string;
    media_id:   number;
    favorite:   boolean;

    constructor (movie_id: number) {
        this.media_type = 'movie';
        this.media_id = movie_id;
        this.favorite = true;
    }
}

export interface GetFavoriteMoviesResponse {
    page:          number;
    results:       Favorite[];
    total_pages:   number;
    total_results: number;
}

export interface Favorite {
    adult:             boolean;
    backdrop_path:     null;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    release_date:      string;
    poster_path:       null;
    popularity:        number;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}
