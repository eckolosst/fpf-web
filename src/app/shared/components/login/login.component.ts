import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  signinForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  signin() {
    const signinData = this.signinForm.value;
    /* TODO: En vez de consologuear los datos tiene que ejecutar el login */
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }
}
