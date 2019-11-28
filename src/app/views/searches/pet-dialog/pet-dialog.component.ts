import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pet-dialog',
  templateUrl: './pet-dialog.component.html',
  styleUrls: ['./pet-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PetDialogComponent implements OnInit {
  public apiUrl: string;

  constructor(private dialogRef: MatDialogRef<PetDialogComponent>, @Inject(MAT_DIALOG_DATA) public petData: any) {
    this.apiUrl = environment.apiUrl;
  }

  ngOnInit() {}

  onNoClick() {
    this.dialogRef.close();
  }
}
