import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleAngularComponent } from './example-angular/example-angular.component';
import { UserExampleComponent } from './user-example/user-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleAngularComponent,
    UserExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
