import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './../shared/star.component';
import { ConvertToSpacesPipe } from './../shared/convertt-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailGuard } from './product-detail.guard';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
     RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { 
        path: 'products/:id', 
        canActivate: [ProductDetailGuard],
        component: ProductDetailComponent 
      }
    ]), 
  ]
})
export class ProductModule { }
