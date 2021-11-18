import { InputModalityDetector } from '@angular/cdk/a11y';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogAddToListData,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
  }

  getCreatedLists() {
    
  }

}
