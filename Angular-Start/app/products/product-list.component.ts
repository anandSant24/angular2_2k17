import { Component, OnInit } from '@angular/core';
import { IProduct } from './product'

//Component decorate makes the class as decorator
//moduleId is semi global varialbe availble when using commonJS module format
@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl : 'product-list.component.html',
    styleUrls : ['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    listFilter: string ='cart';
    imageWidth: number=  50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: IProduct[] = [{
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }];
    pageTitle: string = 'Product List';
    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('inside ngONInit');
    }
    onRatingClicked(message: string): void{
        this.pageTitle = 'updated using Output decorator'+message;
    }
}

// import { Component, OnInit } from '@angular/core';
// import { IProduct } from './product';
// import { ProductService } from './product.service';

// @Component({
//     selector:'pm-products',
//     moduleId: module.id,
//     templateUrl: 'product-list.component.html'
// })

// export class ProductListComponent implements OnInit{
//     showImage: boolean = false;
//     pageTitle: string = 'Anand Kumar Sant';
//     /* IProduct is an Interface from TypeScript for Good practice as they can't be transpiled into JS */
//     products: IProduct[];
//     imageWidth: number = 50;
//     errorMessage: string;
//     toggleImage(): void{
//         this.showImage = !this.showImage;
//     }
//     listFilter: string;

//     onNotify(message: string):void{
//         this.pageTitle = `product List`+message;
//     }

//     constructor(private _productService: ProductService){ }

//     ngOnInit(): void{
//         this._productService.getProducts()
//         .subscribe( products => this.products = products, 
//             error => this.errorMessage = <any> error
//         )   

//     }

// }