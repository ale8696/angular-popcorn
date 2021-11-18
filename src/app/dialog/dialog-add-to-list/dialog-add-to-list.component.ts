import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { lista } from 'src/app/models/interfaces/created-lists.interface';
import { AccountService } from 'src/app/services/account.service';

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

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogAddToListData,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getCreatedLists();
  }

  getCreatedLists() {
    this.accountService.getCreatedLists().subscribe(response => {
      this.listasCreadas = response.results;
    })
  }
  

}
