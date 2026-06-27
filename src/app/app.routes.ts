import { Routes } from '@angular/router';
// import { ProductGrid } from './pages/product-grid/product-grid'; 
// //because we made the [export  class ProductGrid {}] to [export default class ProductGrid{}] we need not import it
// same thing with my-wishlist component

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/products'
    },
    {
        path: 'products',
        // component: ProductGrid //usual way
        loadComponent: () => import('./pages/product-grid/product-grid') // implementing lazy loading
    },
    {
        path: 'wishlist',
        loadComponent: () => import('./pages/my-wishlist/my-wishlist') // implementing lazy loading
    }];
