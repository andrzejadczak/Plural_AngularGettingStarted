import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component( {
    selector: 'pm-star',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        console.log(`The rating ${this.rating} was clicked`);
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}
