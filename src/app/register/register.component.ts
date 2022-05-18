import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserDetails } from '../services/userDetails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService, private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName:  new FormControl('', Validators.required),
    address:  new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone:  new FormControl('', Validators.required),
    password: new FormControl('', Validators.required), 
  });

  get firstName() { return this.registerForm.controls['firstName']; }
  get lastName() { return this.registerForm.controls['lastName']; }
  get address() { return this.registerForm.controls['address']; }
  get email() { return this.registerForm.controls['email']; }
  get phone() { return this.registerForm.controls['phone']; }
  get password() { return this.registerForm.controls['password']; }
  
  data:any[] = [];
  register(){
    for(let i=1;i<=400;i++){
      this.http.get<any>("https://api.themoviedb.org/3/movie/"+i+"?api_key=3a3fd3953e8bcec72806959156d314bd&language=en-US").subscribe({
        next:(res)=>this.http.post<any>("http://localhost:8082/movie",res).subscribe((res)=>console.log(res))
      })
    }
    // console.log(this.data);
    // console.log(this.data[0]);
    
    // for(let i=0;i<=this.data.length;i++){
      
    // }


    // let data:UserDetails={
    //   firstName: this.firstName.value,
    //   lastName:this.lastName.value,
    //   address: this.address.value,
    //   email: this.email.value,
    //   phone: this.phone.value,
    //   password: this.password.value,
    // }
    // console.log(data);
    
    // this.userService.registerUser(data).subscribe({
    //     next: x => {
    //       console.log('Observer got a next value: ' + x)
    //       alert("Sign-in Successful. Please login to Continue")
    //       this.router.navigate(['/sign-in'])
    //     },
    //     error: err => {
    //       alert("Something went wrong. Please try again later")
    //       console.error('Observer got an error: ' + err)
    //     }
    // })
  }
}
