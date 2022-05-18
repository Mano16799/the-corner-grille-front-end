import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../services/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  get email() { return this.loginForm.controls['email']; }
  get password() { return this.loginForm.controls['password']; }
 
  
  authenticate() {
    let user: User = {
      email: this.email.value,
      password: this.password.value
    }
    this.userService.verifyUser(user).subscribe(
      {
        next: x => {
          console.log('Observer got a next value: ' + x)
          this.userService.isloggedIn = true
          this.router.navigate(['/home'])
        },
        error: err => {
          console.error('Observer got an error: ' + err)
          alert("Invalid login credentials")
        }
      }
    )
  }
}
