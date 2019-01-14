import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

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
    errorMessage: string;

    _listFilter: string;

    public get listFilter(): string {
        return this._listFilter;
    }

    public set listFilter(v: string) {
        this._listFilter = v;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    products: IProduct[] = [];

    constructor(private productService: ProductService) {}

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        const sub = this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
           },
            error => this.errorMessage = <any>error
        );

        // this.products = this.productService.getProducts();
        // console.info('In OnInit method.');
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();

        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Produkt List: ' + message;
    }
}
