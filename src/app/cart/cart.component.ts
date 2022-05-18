import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders$: any
  constructor(private pizzaService: PizzaService, private userService: UserService) {
    console.log("inside cart");
    
    this.orders$ = this.pizzaService.getAllOrdersForAUser()
  }

  ngOnInit(): void {
  }


}
