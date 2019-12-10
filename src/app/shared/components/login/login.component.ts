import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  MatProgressBar,
  MatButton,
  MatDialogRef,
  MatSnackBar
} from '@angular/material';
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

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signin() {
    const signinData = this.signinForm.value;
    // console.log(signinData);
    this.userService.login(signinData).subscribe(
      result => {
        this.identity = result.user;
        if (!this.identity || !this.identity.id) {
          // console.log('El usuario no se ha logueado coorectamente: id incorrecto');
          this.notificar('Error inesperado al intentar iniciar sesión.');
          this.dialogRef.close(false);
        } else {
          localStorage.setItem('identity', JSON.stringify(this.identity));
          this.userService.login(signinData).subscribe(
            response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                // console.log('El token no se ha generado');
                this.notificar('Error inesperado al intentar iniciar sesión.');
                this.dialogRef.close(false);
              } else {
                localStorage.setItem('token', this.token);
                this.submitButton.disabled = true;
                this.dialogRef.close(true);
              }
            },
            error => {
              console.error(error);
              this.notificar('Error al obtener el token');
              this.dialogRef.close(false);
            }
          );
        }
      },
      error => {
        if (error.status === 403) {
          this.notificar('Usuario o contraseña incorrecto!');
        } else {
          // console.log(error);
          this.notificar('Error inesperado al intentar iniciar sesión.');
        }
        this.dialogRef.close(false);
      }
    );
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }
  notificar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 20000
    });
  }
}
