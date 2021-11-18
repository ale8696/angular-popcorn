import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddToListComponent } from 'src/app/dialog/dialog-add-to-list/dialog-add-to-list.component';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  
  @Input() movieInput!: Movie;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openDialogAddToList() {
    this.dialog.open(DialogAddToListComponent, {
      height: '400px',
      width: '300px',
      data: { movieId: this.movieInput?.id }
    });
  }

}
