import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private router: Router) 
    { 
    }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      "productId" : id,
      "productName" : "Hammer",
      "productCode" : "TBX-0048",
      "releaseDate" : "May 22, 2019",
      "description" : "Curved claw steel hammer",
      "price" : 8.99,
      "starRating" : 4.8,
      "imageUrl": "assets/images/hammer.png"

    }; 
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
