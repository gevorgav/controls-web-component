import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {NgCardElementComponent} from './ng-card-element/ng-card-element.component';
import {createCustomElement} from '@angular/elements';
import {NgCardElementComponent2} from './ng-card-element-2/ng-card-element.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [NgCardElementComponent, NgCardElementComponent2],
  entryComponents: [NgCardElementComponent, NgCardElementComponent2]
})
export class AppModule {
  constructor(private injector: Injector) {
    // using createCustomElement from angular package it will convert angular component to stander web component
    const el = createCustomElement(NgCardElementComponent, {
      injector
    });
    const el2 = createCustomElement(NgCardElementComponent2, {
      injector
    });
    // using built in the browser to create your own custome element name
    customElements.define('facebook-card', el);
    customElements.define('facebook-card-2', el2);
  }

  ngDoBootstrap(): void {

  }
}
