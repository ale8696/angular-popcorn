import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AccountService } from 'src/app/services/account.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Favorite } from 'src/app/models/interfaces/account.interface';

@Component({
  selector: 'app-movies-popular-list',
  templateUrl: './movies-popular-list.component.html',
  styleUrls: ['./movies-popular-list.component.css']
})
export class MoviesPopularListComponent implements OnInit {
  popularMovies: Movie[] = [];
  favoriteMovies: Favorite[] = [];

  constructor(
    private moviesService: MoviesService,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe(popularMoviesResponse => {
      this.popularMovies = popularMoviesResponse.results;
      this.accountService.getFavoriteMovies().subscribe(response => {
        this.favoriteMovies = response.results;
      });
    });
  }

}
