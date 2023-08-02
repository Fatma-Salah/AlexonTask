import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { ChoosecomplaintComponent } from './components/choosecomplaint/choosecomplaint.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ChooseComplaintWithGreenBoxComponent } from './components/choose-complaint-with-green-box/choose-complaint-with-green-box.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, ChoosecomplaintComponent, ControlPanelComponent, ChooseComplaintWithGreenBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
