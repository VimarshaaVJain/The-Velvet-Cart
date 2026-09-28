import { Component, computed, inject, input, signal } from '@angular/core';
import { Product } from '../../models/products';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { ProductCard } from "../../components/product-card/product-card";
import { MatSidenavModule, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem, MatListItemTitle } from '@angular/material/list'
import { RouterLink } from '@angular/router';
import { EcommerceStore } from '../../e-commerece.store';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule, ProductCard, MatSidenavModule, MatSidenavContainer, MatSidenavContent, MatNavList, MatListItem, MatListItemTitle, RouterLink, TitleCasePipe, ToggleWishlistButton],
  template: ` 
<mat-sidenav-container>
  <mat-sidenav mode="side" opened="true">
    <div class="p-6 my-12">
      <h2 class="text-lg text-gray-900 ">
        Categories
      </h2>
      <mat-nav-list>
@for (cat of categories(); track $index) {
  <mat-list-item class="my-2" [activated]="cat === category()" [routerLink]="['/products', cat]">
  <div matListItemTitle [class]="cat === category() ? '!text-white' : null">{{cat | titlecase }}</div>
  </mat-list-item>
}
      </mat-nav-list>
    </div>
  </mat-sidenav>
  <mat-sidenav-content class="bg-gray-100 p-6">
      <h1 class="text-2xl font-bold text-gray-900 mb-1 my-12">
      {{category() | titlecase }}
    </h1>
    <p class="text-base text-gray-600 mb-6" >{{ store.filteredProducts().length }} products found</p>
 <div class="responsive-grid">
    @for (prod of store.filteredProducts(); track prod.id) {
      <app-product-card [prod]="prod">
         <app-toggle-wishlist-button class="!absolute z-10 top-3 right-3" [prod]="prod"></app-toggle-wishlist-button>
      </app-product-card>
    }

  </div>
  </mat-sidenav-content>
</mat-sidenav-container>


  <div class="bg-gray-100 p-6">
  
  </div> `
  ,
  styles: ``,
})
export default class ProductGrid {
  category = input<string>('all');
  categories = signal<string[]>(['all', 'apparel', 'electronics', 'lifestyle'])

  store = inject(EcommerceStore);

  constructor(){
    this.store.setCategory(this.category)
  }



}
