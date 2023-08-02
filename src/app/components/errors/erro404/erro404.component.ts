import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css']
})
export class Erro404Component implements OnInit {
  ngOnInit(): void {
    if (localStorage.getItem('title') !='هذه الصفحه غير موجوده ') { 
      localStorage.setItem('title','هذه الصفحه غير موجوده '); 
   location.reload() 
 } 
  }
  
}
