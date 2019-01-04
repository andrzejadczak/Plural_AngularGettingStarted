import { Component, OnChanges, Input } from '@angular/core';

@Component( {
    selector: 'pm-star',
    styleUrls: ['./star.component.css'],
    templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

}
