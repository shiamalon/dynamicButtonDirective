import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DivComponentComponent } from './div-component/div-component.component';
import { ButtonDirectiveDirective } from './button-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    DivComponentComponent,
    ButtonDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
