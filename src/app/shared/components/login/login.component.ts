import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatProgressBar, MatButton, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  public token: any;
  signinForm: FormGroup;
  public identity: any;

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private userService: UserService) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signin() {
    const signinData = this.signinForm.value;
    console.log(signinData);
    this.userService.login(signinData).subscribe(
      result => {
        this.identity = result.user;
        if (!this.identity || !this.identity.id) {
          console.log('El usuario no se ha logueado coorectamente: id incorrecto');
        } else {
          localStorage.setItem('identity', JSON.stringify(this.identity));

          this.userService.login(signinData).subscribe(
            response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                console.log('El token no se ha generado');
              } else {
                localStorage.setItem('token', this.token);
                this.submitButton.disabled = true;
                this.dialogRef.close(true);
              }
            },
            error => {
              console.log('Error al obtener el token');
            }
          );
        }
      },
      error => {
        console.log(error);
      }
    );
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
