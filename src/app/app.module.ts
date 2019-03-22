import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatRippleModule } from '@angular/material/core';

import { TsCardComponent } from './card/card.component';
import { TsWindowService } from './window.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TsCardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MatRippleModule,
  ],
  providers: [TsWindowService],
  entryComponents:[TsCardComponent],
})
export class AppModule { 
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const el = createCustomElement(TsCardComponent, { injector: this.injector });
    customElements.define('ts-card', el);
  }
}
