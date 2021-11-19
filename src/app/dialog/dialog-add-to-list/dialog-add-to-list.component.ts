import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CreateListDto, CreateListResponse, lista } from 'src/app/models/interfaces/lists.interface';
import { AccountService } from 'src/app/services/account.service';
import { ListsService } from 'src/app/services/lists.service';

export interface DialogAddToListData {
  movieId: number;
}

@Component({
  selector: 'app-dialog-add-to-list',
  templateUrl: './dialog-add-to-list.component.html',
  styleUrls: ['./dialog-add-to-list.component.css']
})

export class DialogAddToListComponent implements OnInit {

  listasCreadas!: lista[];
  selected!: number;
  nombreLista!: string;
  descripcionLista!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogAddToListData,
    private accountService: AccountService,
    private listService: ListsService,
  ) { }

  ngOnInit(): void {
    this.getCreatedLists();
  }

  getCreatedLists() {
    this.accountService.getCreatedLists().subscribe(response => {
      this.listasCreadas = response.results;
    })
  }
  
  //Temporal***
  postCreateList() {
    let lista: CreateListDto = new CreateListDto(this.nombreLista, this.descripcionLista)
    let respuesta: CreateListResponse;
    this.listService.postCreateList(lista).subscribe();
  }

  addMovieToNewList() {}

}
