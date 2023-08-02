import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.css']
})
export class ControlPanelComponent implements  OnInit {
  @Output() isAdmin = true;
 
  ngOnInit(): void {  
     if (localStorage.getItem('title') !='لوحة التحكم') { 
      localStorage.setItem('title','لوحة التحكم');
    location.reload() 
  } 
  }

}
