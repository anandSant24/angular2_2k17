// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { ProductService } from './products/product.service';

// import { AppComponent }  from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import { TestComponent } from './products/test-list.component';
// import { ProductFilterPipe } from './products/product-filter.pipes';
// import { StarComponent } from './common/star.component';

// import {HttpModule} from '@angular/http';

// @NgModule({
//   imports: [ BrowserModule, FormsModule, HttpModule ],
//   declarations: [ AppComponent, ProductListComponent, TestComponent, ProductFilterPipe, StarComponent ],
//   providers: [ProductService],
//   bootstrap: [ AppComponent ]
  
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product-filter.pipes';
import { StarComponent } from './common/star.component';
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent , ProductListComponent, ProductFilterPipe, StarComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule{
  pageTitle: string = 'Anand Kumar Sant';
}