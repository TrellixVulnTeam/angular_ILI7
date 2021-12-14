import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  isUsername: boolean = true;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    if (!this.loginForm.valid) {
      alert("invalid credentials!!");
      return false;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigate(['blog']);
  }

  onChangeSecondInputField(value) {
    if (value == 'username') {
      this.isUsername = true;
    } else if (value == 'email') {
      this.isUsername = false;
    }
  }
}
