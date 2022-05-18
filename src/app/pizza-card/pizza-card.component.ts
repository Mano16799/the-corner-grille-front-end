import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from '../services/pizza.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.component.html',
  styleUrls: ['./pizza-card.component.css']
})
export class PizzaCardComponent implements OnInit {

  pizzaDetails$: any
  constructor(private pizzasSerice: PizzaService, private userService: UserService, private router: Router) {
    this.pizzaDetails$ = this.pizzasSerice.getPizzaDetails()
  }

  ngOnInit(): void {
  }


  pizzaForm = new FormGroup({
    farm_house_pizza_qty: new FormControl('0'),
    farm_house_pizza_toppings: new FormControl('no toppings'),
    farm_house_pizza_crust: new FormControl('no crust'),
    farm_house_pizza_size: new FormControl('regular'),
    farm_house_pizza_cost: new FormControl(''),

    brenan_greene_pizza_qty: new FormControl('0'),
    brenan_greene_pizza_toppings: new FormControl('no toppings'),
    brenan_greene_pizza_crust: new FormControl('no crust'),
    brenan_greene_pizza_size: new FormControl('regular'),
    brenan_greene_pizza_cost: new FormControl(''),

    cheese_n_corn_pizza_qty: new FormControl('0'),
    cheese_n_corn_pizza_toppings: new FormControl('no toppings'),
    cheese_n_corn_pizza_crust: new FormControl('no crust'),
    cheese_n_corn_pizza_size: new FormControl('regular'),
    cheese_n_corn_pizza_cost: new FormControl(''),

    deluxe_veggie_pizza_qty: new FormControl('0'),
    deluxe_veggie_pizza_toppings: new FormControl('no toppings'),
    deluxe_veggie_pizza_crust: new FormControl('no crust'),
    deluxe_veggie_pizza_size: new FormControl('regular'),
    deluxe_veggie_pizza_cost: new FormControl(''),

    extra_cheese_pizza_qty: new FormControl('0'),
    extra_cheese_pizza_toppings: new FormControl('no toppings'),
    extra_cheese_pizza_crust: new FormControl('no crust'),
    extra_cheese_pizza_size: new FormControl('regular'),
    extra_cheese_pizza_cost: new FormControl(''),

    indie_tandoori_panneer_pizza_qty: new FormControl('0'),
    indie_tandoori_panneer_pizza_toppings: new FormControl('no toppings'),
    indie_tandoori_panneer_pizza_crust: new FormControl('no crust'),
    indie_tandoori_panneer_pizza_size: new FormControl('regular'),
    indie_tandoori_panneer_pizza_cost: new FormControl(''),

    italian_green_wave_pizza_qty: new FormControl('0'),
    italian_green_wave_pizza_toppings: new FormControl('no toppings'),
    italian_green_wave_pizza_crust: new FormControl('no crust'),
    italian_green_wave_pizza_size: new FormControl('regular'),
    italian_green_wave_pizza_cost: new FormControl(''),

    mexican_margherita_pizza_qty: new FormControl('0'),
    mexican_margherita_pizza_toppings: new FormControl('no toppings'),
    mexican_margherita_pizza_crust: new FormControl('no crust'),
    mexican_margherita_pizza_size: new FormControl('regular'),
    mexican_margherita_pizza_cost: new FormControl(''),

    veg_extravaganza_pizza_qty: new FormControl('0'),
    veg_extravaganza_pizza_toppings: new FormControl('no toppings'),
    veg_extravaganza_pizza_crust: new FormControl('no crust'),
    veg_extravaganza_pizza_size: new FormControl('regular'),
    veg_extravaganza_pizza_cost: new FormControl(''),

    veggie_paradise_pizza_qty: new FormControl('0'),
    veggie_paradise_pizza_toppings: new FormControl('no toppings'),
    veggie_paradise_pizza_crust: new FormControl('no crust'),
    veggie_paradise_pizza_size: new FormControl('regular'),
    veggie_paradise_pizza_cost: new FormControl(''),

    vita_marita_pizza_qty: new FormControl('0'),
    vita_marita_pizza_toppings: new FormControl('no toppings'),
    vita_marita_pizza_crust: new FormControl('no crust'),
    vita_marita_pizza_size: new FormControl('regular'),
    vita_marita_pizza_cost: new FormControl(''),
  });

  get farm_house_pizza_qty() { return this.pizzaForm.controls['farm_house_pizza_qty'] }
  get farm_house_pizza_toppings() { return this.pizzaForm.controls['farm_house_pizza_toppings'] }
  get farm_house_pizza_crust() { return this.pizzaForm.controls['farm_house_pizza_crust'] }
  get farm_house_pizza_size() { return this.pizzaForm.controls['farm_house_pizza_size'] }
  get farm_house_pizza_cost() { return this.pizzaForm.controls['farm_house_pizza_cost'] }


  get brenan_greene_pizza_qty() { return this.pizzaForm.controls['brenan_greene_pizza_qty'] }
  get brenan_greene_pizza_toppings() { return this.pizzaForm.controls['brenan_greene_pizza_toppings'] }
  get brenan_greene_pizza_crust() { return this.pizzaForm.controls['brenan_greene_pizza_crust'] }
  get brenan_greene_pizza_size() { return this.pizzaForm.controls['brenan_greene_pizza_size'] }
  get brenan_greene_pizza_cost() { return this.pizzaForm.controls['brenan_greene_pizza_cost'] }

  get cheese_n_corn_pizza_qty() { return this.pizzaForm.controls['cheese_n_corn_pizza_qty'] }
  get cheese_n_corn_pizza_toppings() { return this.pizzaForm.controls['cheese_n_corn_pizza_toppings'] }
  get cheese_n_corn_pizza_crust() { return this.pizzaForm.controls['cheese_n_corn_pizza_crust'] }
  get cheese_n_corn_pizza_size() { return this.pizzaForm.controls['cheese_n_corn_pizza_size'] }
  get cheese_n_corn_pizza_cost() { return this.pizzaForm.controls['cheese_n_corn_pizza_cost'] }

  get deluxe_veggie_pizza_qty() { return this.pizzaForm.controls['deluxe_veggie_pizza_qty'] }
  get deluxe_veggie_pizza_toppings() { return this.pizzaForm.controls['deluxe_veggie_pizza_toppings'] }
  get deluxe_veggie_pizza_crust() { return this.pizzaForm.controls['deluxe_veggie_pizza_crust'] }
  get deluxe_veggie_pizza_size() { return this.pizzaForm.controls['deluxe_veggie_pizza_size'] }
  get deluxe_veggie_pizza_cost() { return this.pizzaForm.controls['deluxe_veggie_pizza_cost'] }

  get extra_cheese_pizza_qty() { return this.pizzaForm.controls['extra_cheese_pizza_qty'] }
  get extra_cheese_pizza_toppings() { return this.pizzaForm.controls['extra_cheese_pizza_toppings'] }
  get extra_cheese_pizza_crust() { return this.pizzaForm.controls['extra_cheese_pizza_crust'] }
  get extra_cheese_pizza_size() { return this.pizzaForm.controls['extra_cheese_pizza_size'] }
  get extra_cheese_pizza_cost() { return this.pizzaForm.controls['extra_cheese_pizza_cost'] }

  get indie_tandoori_panneer_pizza_qty() { return this.pizzaForm.controls['indie_tandoori_panneer_pizza_qty'] }
  get indie_tandoori_panneer_pizza_toppings() { return this.pizzaForm.controls['indie_tandoori_panneer_pizza_toppings'] }
  get indie_tandoori_panneer_pizza_crust() { return this.pizzaForm.controls['indie_tandoori_panneer_pizza_crust'] }
  get indie_tandoori_panneer_pizza_size() { return this.pizzaForm.controls['indie_tandoori_panneer_pizza_size'] }
  get indie_tandoori_panneer_pizza_cost() { return this.pizzaForm.controls['indie_tandoori_panneer_pizza_cost'] }

  get italian_green_wave_pizza_qty() { return this.pizzaForm.controls['italian_green_wave_pizza_qty'] }
  get italian_green_wave_pizza_toppings() { return this.pizzaForm.controls['italian_green_wave_pizza_toppings'] }
  get italian_green_wave_pizza_crust() { return this.pizzaForm.controls['italian_green_wave_pizza_crust'] }
  get italian_green_wave_pizza_size() { return this.pizzaForm.controls['italian_green_wave_pizza_size'] }
  get italian_green_wave_pizza_cost() { return this.pizzaForm.controls['italian_green_wave_pizza_cost'] }

  get mexican_margherita_pizza_qty() { return this.pizzaForm.controls['mexican_margherita_pizza_qty'] }
  get mexican_margherita_pizza_toppings() { return this.pizzaForm.controls['mexican_margherita_pizza_toppings'] }
  get mexican_margherita_pizza_crust() { return this.pizzaForm.controls['mexican_margherita_pizza_crust'] }
  get mexican_margherita_pizza_size() { return this.pizzaForm.controls['mexican_margherita_pizza_size'] }
  get mexican_margherita_pizza_cost() { return this.pizzaForm.controls['mexican_margherita_pizza_cost'] }

  get veg_extravaganza_pizza_qty() { return this.pizzaForm.controls['veg_extravaganza_pizza_qty'] }
  get veg_extravaganza_pizza_toppings() { return this.pizzaForm.controls['veg_extravaganza_pizza_toppings'] }
  get veg_extravaganza_pizza_crust() { return this.pizzaForm.controls['veg_extravaganza_pizza_crust'] }
  get veg_extravaganza_pizza_size() { return this.pizzaForm.controls['veg_extravaganza_pizza_size'] }
  get veg_extravaganza_pizza_cost() { return this.pizzaForm.controls['veg_extravaganza_pizza_cost'] }

  get veggie_paradise_pizza_qty() { return this.pizzaForm.controls['veggie_paradise_pizza_qty'] }
  get veggie_paradise_pizza_toppings() { return this.pizzaForm.controls['veggie_paradise_pizza_toppings'] }
  get veggie_paradise_pizza_crust() { return this.pizzaForm.controls['veggie_paradise_pizza_crust'] }
  get veggie_paradise_pizza_size() { return this.pizzaForm.controls['veggie_paradise_pizza_size'] }
  get veggie_paradise_pizza_cost() { return this.pizzaForm.controls['veggie_paradise_pizza_cost'] }

  get vita_marita_pizza_qty() { return this.pizzaForm.controls['vita_marita_pizza_qty'] }
  get vita_marita_pizza_toppings() { return this.pizzaForm.controls['vita_marita_pizza_toppings'] }
  get vita_marita_pizza_crust() { return this.pizzaForm.controls['vita_marita_pizza_crust'] }
  get vita_marita_pizza_size() { return this.pizzaForm.controls['vita_marita_pizza_size'] }
  get vita_marita_pizza_cost() { return this.pizzaForm.controls['vita_marita_pizza_cost'] }


  placeOrder() {
    let pizzaList = [
      {
        pizzaName: "farm_house_pizza",
        quantity: this.farm_house_pizza_qty.value,
        toppingsChoice: this.farm_house_pizza_toppings.value,
        crustChoice: this.farm_house_pizza_crust.value,
        size: this.farm_house_pizza_size.value,
        cost: 425
      },
      {
        pizzaName: "brenan_greene_pizza",
        quantity: this.brenan_greene_pizza_qty.value,
        toppingsChoice: this.brenan_greene_pizza_toppings.value,
        crustChoice: this.brenan_greene_pizza_crust.value,
        size: this.brenan_greene_pizza_size.value,
        cost: 400
      },
      {
        pizzaName: "cheese_n_corn_pizza",
        quantity: this.cheese_n_corn_pizza_qty.value,
        toppingsChoice: this.cheese_n_corn_pizza_toppings.value,
        crustChoice: this.cheese_n_corn_pizza_crust.value,
        size: this.cheese_n_corn_pizza_size.value,
        cost: 450
      },
      {
        pizzaName: "deluxe_veggie_pizza",
        quantity: this.deluxe_veggie_pizza_qty.value,
        toppingsChoice: this.deluxe_veggie_pizza_toppings.value,
        crustChoice: this.deluxe_veggie_pizza_crust.value,
        size: this.deluxe_veggie_pizza_size.value,
        cost: 370
      },
      {
        pizzaName: "extra_cheese_pizza",
        quantity: this.extra_cheese_pizza_qty.value,
        toppingsChoice: this.extra_cheese_pizza_toppings.value,
        crustChoice: this.extra_cheese_pizza_crust.value,
        size: this.extra_cheese_pizza_size.value,
        cost: 355
      },
      {
        pizzaName: "indie_tandoori_panneer_pizza",
        quantity: this.indie_tandoori_panneer_pizza_qty.value,
        toppingsChoice: this.indie_tandoori_panneer_pizza_toppings.value,
        crustChoice: this.indie_tandoori_panneer_pizza_crust.value,
        size: this.indie_tandoori_panneer_pizza_size.value,
        cost: 400
      },
      {
        pizzaName: "italian_green_wave_pizza",
        quantity: this.italian_green_wave_pizza_qty.value,
        toppingsChoice: this.italian_green_wave_pizza_toppings.value,
        crustChoice: this.italian_green_wave_pizza_crust.value,
        size: this.italian_green_wave_pizza_size.value,
        cost: 450

      },
      {
        pizzaName: "mexican_margherita_pizza",
        quantity: this.mexican_margherita_pizza_qty.value,
        toppingsChoice: this.mexican_margherita_pizza_toppings.value,
        crustChoice: this.mexican_margherita_pizza_crust.value,
        size: this.mexican_margherita_pizza_size.value,
        cost: 445
      },
      {
        pizzaName: "veg_extravaganza_pizza",
        quantity: this.veg_extravaganza_pizza_qty.value,
        toppingsChoice: this.veg_extravaganza_pizza_toppings.value,
        crustChoice: this.veg_extravaganza_pizza_crust.value,
        size: this.veg_extravaganza_pizza_size.value,
        cost: 530
      },
      {
        pizzaName: "veggie_paradise_pizza",
        quantity: this.veggie_paradise_pizza_qty.value,
        toppingsChoice: this.veggie_paradise_pizza_toppings.value,
        crustChoice: this.veggie_paradise_pizza_crust.value,
        size: this.veggie_paradise_pizza_size.value,
        cost: 510

      },
      {
        pizzaName: "vita_marita_pizza",
        quantity: this.vita_marita_pizza_qty.value,
        toppingsChoice: this.vita_marita_pizza_toppings.value,
        crustChoice: this.vita_marita_pizza_crust.value,
        size: this.vita_marita_pizza_size.value,
        cost: 560

      }
    ]
    let totalSum = 0;
    pizzaList = pizzaList.filter(p => p.quantity > 0);
    pizzaList.map(p => totalSum = totalSum + (p.cost * p.quantity))
    
    if(pizzaList.length<=0){
      alert("incorrect values")
      return
    }

    let order = {
      totalCost: totalSum,
      pizzaList: pizzaList,
      userDetails: this.userService.currentUser,
      orderDate: (new Date()).toDateString()
    }
    console.log(order.orderDate);
    
    this.pizzasSerice.storeOrder(order).subscribe({
      next: x => {
        alert("order placed! view cart")
        console.log('Observer got a next value: ' + x)
      },
      error: err => {
        alert("there is some error. try again later")
        console.error('Observer got an error: ' + err)
      }
    })
  }

}
