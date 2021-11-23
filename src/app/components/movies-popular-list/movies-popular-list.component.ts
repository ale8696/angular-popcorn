import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Genre } from 'src/app/models/interfaces/genres.interface';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AccountService } from 'src/app/services/account.service';
import { GenreService } from 'src/app/services/genre.service';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {
  popularMovies: Movie[] = [];
  actualMovies: Movie[] = [];
  favoriteMovies: Movie[] = [];
  genres: Genre[] = [];
  generos = new FormControl();

  constructor(
    private moviesService: MoviesService,
    private accountService: AccountService,
    private genreService: GenreService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(popularMoviesResponse => {
      this.popularMovies = popularMoviesResponse.results;
      this.accountService.getFavoriteMovies().subscribe(response => {
        this.favoriteMovies = response.results;
      });
    });
    this.getGenreList();
  }

  isFavorite(movie: Movie): boolean {
    if (this.favoriteMovies?.find(p => (p.id == movie.id))) {
      return true;
    }
    else {
      return false;
    }
  }

  getGenreList() {
    this.genreService.getGenresList().subscribe(response => {
      this.genres = response.genres;
    })
  }
/*
  filterList() {
    this.genres.forEach(genre => {
      this.actualMovies.(this.popularMovies.filter(movie => movie.genre_ids.includes(genre.id)));
    });
  }
*/
}
