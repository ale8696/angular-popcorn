import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddToListComponent } from 'src/app/dialog/dialog-add-to-list/dialog-add-to-list.component';
import { FavoriteDto } from 'src/app/models/interfaces/account.interface';
import { Movie } from 'src/app/models/interfaces/movies-popular.interface';
import { AccountService } from 'src/app/services/account.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  
  @Input() movieInput!: Movie;
  @Input() favorite!: boolean;

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
  }

  getMovieImageUrl(movie: Movie) {
    return `${environment.imageBaseUrl}${movie.poster_path}`;
  }

  openDialogAddToList() {
    this.dialog.open(DialogAddToListComponent, {
      height: '400px',
      width: '300px',
      data: { movieId: this.movieInput.id }
    });
  }

  markFavorite() {
    let favorita: FavoriteDto;
    if(this.favorite) {
      favorita = new FavoriteDto(this.movieInput.id, false);
      this.favorite = false;
    }
    else {
      favorita = new FavoriteDto(this.movieInput.id, true);
      this.favorite = true;
    }
    this.accountService.markFavorite(favorita).subscribe();
  }

}
