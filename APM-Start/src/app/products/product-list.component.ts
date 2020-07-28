import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {
    }

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    
    _listFilter: string = '';
    public get listFilter() : string {
        return this._listFilter;
    }
    public set listFilter(value : string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? 
            this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter(
            (product: IProduct) => 
                product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatincgClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    } 
}

