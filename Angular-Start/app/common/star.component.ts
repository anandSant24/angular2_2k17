import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
 @Input() rating : number;
 starWidth: number;
 ngOnChanges(): void{
     this.starWidth = this.rating * 86/5;
 }
 @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

 onClick(): void {
     this.ratingClicked.emit(`clicked ${this.rating}`);
 }
}


// import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//     selector: 'product-rating',
//     templateUrl: 'app/common/star.component.html',
//     styleUrls:['app/common/star.component.css'] 
// })

// export class StarComponent implements OnChanges{
//     @Input() rating: number;
//     title: 'test';
//     starWidth: number;    
//     @Output() notify: EventEmitter<string> = new EventEmitter<string>(); 
//     ngOnChanges(): void{
//         this.starWidth = this.rating * 86/5;
//     }
//     onClick():void{
//         this.notify.emit('clicked');
//     }
// } 

