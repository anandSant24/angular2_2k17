import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <div><h1>Angular2: Getting Started {{pageTitle}}</h1>
            <pm-products> </pm-products>
        </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Anand Kumar Sant';
}
