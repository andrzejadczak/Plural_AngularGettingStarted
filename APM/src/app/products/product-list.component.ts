import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-lict.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    filteredProducts: IProduct[];

    _listFilter: string;

    public get listFilter(): string {
        return this._listFilter;
    }

    public set listFilter(v: string) {
        this._listFilter = v;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] =
    [
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'productCode': 'GDN-0023',
            'releaseDate': 'March 18, 2016',
            'description': '15 gallon capacity rolling garden cart',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
          },
          {
            'productId': 5,
            'productName': 'Hammer',
            'productCode': 'TBX-0048',
            'releaseDate': 'May 21, 2016',
            'description': 'Curved claw steel hammer',
            'price': 8.9,
            'starRating': 4.8,
            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
          }
    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = '';
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        // console.info('In OnInit method.');
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}
