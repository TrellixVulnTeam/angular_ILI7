import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private router:Router,
    private authService:AuthService) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators
        .pattern(/^[a-z][a-z]*[a-z]+$/)]),
      email: new FormControl('', [Validators.required,Validators.pattern(/^([a-z]*[A-Z]*)\d*@prominentpixel.com$/)]),
      fullname: new FormControl('', [Validators.required, Validators.pattern(/^([a-z]*[A-Z]*)*$/)]),
      password: new FormControl('', [Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
      confirmpassword: new FormControl('', [Validators.required]),
    });
  }
  onSignUpSubmit() {
    if (!this.signupForm.valid) {
      alert('invalid credentials!!');
      return;
    } else {
      this.authService.login(this.signupForm.value);
      this.router.navigate(['blog']);
    }
  }
}
