import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { UserDetails } from './userDetails';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  currentUser!:User
  isloggedIn:boolean=false

  verifyUser(user:User){
    this.currentUser = user;
    return this.httpClient.post("http://localhost:9000/api/user/v1/verify-user",user)
  }

  registerUser(user:UserDetails){
    return this.httpClient.post("http://localhost:8086/api/user/v1/register",user)
  }
}

