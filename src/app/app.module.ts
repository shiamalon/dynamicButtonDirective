import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DivComponentComponent } from './div-component/div-component.component';
import { ButtonDirectiveDirective } from './button-directive.directive';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    DivComponentComponent,
    ButtonDirectiveDirective,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ButtonComponent]
})
export class AppModule { }
