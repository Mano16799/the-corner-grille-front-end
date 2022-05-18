import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { HomeComponent } from './home/home.component';
import { LoginNavComponent } from './login-nav/login-nav.component';
import { LoginComponent } from './login/login.component';
import { PizzaCardComponent } from './pizza-card/pizza-card.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: "sign-in",
    component: LoginNavComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "",
        component: LoginComponent
      }
    ]
  },
  {
    path: "home",
    component: HomeNavComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path:"",
        component:HomeComponent,
        children:[
          {
            path:"",
            component:PizzaCardComponent
          }
        ]
      },
      {
        path:"cart",
        component:CartComponent
      }
    ]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
