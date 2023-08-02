import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoosecomplaintComponent } from './components/choosecomplaint/choosecomplaint.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { Erro404Component } from './components/errors/erro404/erro404.component';
import { ChooseComplaintWithGreenBoxComponent } from './components/choose-complaint-with-green-box/choose-complaint-with-green-box.component';

const routes: Routes = [
  
  { path: '', component: ChoosecomplaintComponent },
  { path: 'controlPanel', component: ControlPanelComponent },
  {path:'complaintChecked' , component:ChooseComplaintWithGreenBoxComponent},
  {path:'**' , component:Erro404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
