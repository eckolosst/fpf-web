import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
  // encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {
  public isLogued: boolean;
  constructor(private dialog: MatDialog, private userService: UserService) {}

  ngOnInit() {
    this.checkLogued();
  }

  login_SignUp(type: string) {
    if (type === 'login') {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '400px',
        panelClass: 'custom-dialog-container'
      });
      dialogRef.afterClosed().subscribe(result => {
        this.checkLogued();
      });
    } else {
      const dialogRef = this.dialog.open(SignupComponent, { width: '400px' });
    }
  }

  checkLogued() {
    this.isLogued = this.userService.isLogued();
  }

  logout() {
    this.userService.logout();
    this.isLogued = false;
  }
}
