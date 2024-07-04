import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from '../../partials/title/title.component';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitleComponent, NgFor, NgIf,RouterLink,CurrencyPipe],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{
  cart!: Cart;
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((cart)=>
    this.cart = cart);
  }

  ngOnInit(): void {
    
  }

  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem, quanityInString:string){
    const quantity= parseInt(quanityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
