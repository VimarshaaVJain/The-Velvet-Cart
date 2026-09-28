import { Component, computed, inject, input } from '@angular/core';
import { EcommerceStore } from '../../e-commerece.store';
import { Product } from '../../models/products';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [MatIcon],
  template: `    
              <button  class="w-10 h-10 rounded-full !bg-white border-0 shadow-md flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg" 
              [class]="isInwishlist() ? '!text-red-500' : '!text-grey-400'"
              matIconButton (click)="toggleWishlist(prod())">
                  <mat-icon>{{isInwishlist() ? 'favorite' : 'favorite_border'}}</mat-icon>
              </button>
             `,
  styles: ``,
})
export class ToggleWishlistButton {
   prod = input.required<Product>();
 
   store = inject(EcommerceStore);

  isInwishlist = computed(()=>this.store.wishlistItems().find(p => p.id === this.prod().id));

  toggleWishlist(product : Product){
    if(this.isInwishlist()){
      this.store.removeFromwishlist(product);
    } else {
      this.store.addToWishlist(product);
    }
  }
}
