import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements  OnInit {
  @Output() isAdmin = true;
 
  ngOnInit(): void {
   localStorage.setItem('title','لوحة التحكم');
  }

}
