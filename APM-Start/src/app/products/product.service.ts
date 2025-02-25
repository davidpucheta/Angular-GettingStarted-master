import { IProduct } from './product';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                "productId" : 2,
                "productName" : "Garden Cart",
                "productCode" : "GDN-0023",
                "releaseDate" : "March 28, 2020",
                "description" : "15 gallon capacity rolling garden cart",
                "price" : 32.99,
                "starRating" : 4.2,
                "imageUrl": "assets/images/garden_cart.png"
            },
            {
                "productId" : 5,
                "productName" : "Hammer",
                "productCode" : "TBX-0048",
                "releaseDate" : "May 22, 2019",
                "description" : "Curved claw steel hammer",
                "price" : 8.99,
                "starRating" : 4.8,
                "imageUrl": "assets/images/hammer.png"
            }
        ];
    }
}