import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http:HttpClient, private userService: UserService) { 

  }

  getPizzaDetails(){
    return this.http.get("http://localhost:8083/api/pizza/v1/pizzas")
  }

  storeOrder(data:any){
    return this.http.post("http://localhost:8085/api/orders/v1/order",data)
  }

  getAllOrdersForAUser(){
     return this.http.get("http://localhost:8085/api/orders/v1/orders/"+this.userService.currentUser.email);
  }
}
