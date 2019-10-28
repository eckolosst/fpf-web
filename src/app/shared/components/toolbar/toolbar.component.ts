import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  login_SignUp(type: string) {
    if (type === 'login') {
      const dialogRef = this.dialog.open(LoginComponent, { width: '400px' });
    } else {
      const dialogRef = this.dialog.open(SignupComponent, { width: '400px' });
    }
  }
}
