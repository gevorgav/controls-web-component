import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {NgCardElementComponent} from './ng-card-element/ng-card-element.component';
import {createCustomElement} from '@angular/elements';
import {NgCardElement2Component} from './ng-card-element-2/ng-card-element.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NgCardElementComponent, NgCardElement2Component],
  entryComponents: [NgCardElementComponent, NgCardElement2Component]
})
export class AppModule {
  constructor(private injector: Injector) {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector
    });
    const el2 = createCustomElement(NgCardElement2Component, {
      injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('facebook-card', el);
    customElements.define('facebook-card-2', el2);
  }

  ngDoBootstrap(): void {

  }
}
