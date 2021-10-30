import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomeDirectiveDirective } from './custome-directive.directive';
import { NewCutomeDirectiveDirective } from './new-cutome-directive/new-cutome-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomeDirectiveDirective,
    NewCutomeDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
