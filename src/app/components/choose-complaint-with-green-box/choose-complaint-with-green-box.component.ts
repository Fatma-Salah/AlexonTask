import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-complaint-with-green-box',
  templateUrl: '../choosecomplaint/choosecomplaint.component.html',
  styleUrls: ['../choosecomplaint/choosecomplaint.component.css','./choose-complaint-with-green-box.component.css'
]
})
export class ChooseComplaintWithGreenBoxComponent implements OnInit {
   boxSuccess = document.querySelector('.container-body > div:nth-child(3)') as HTMLElement;
   ngOnInit(): void {
    localStorage.setItem('title',' نوع الشكوي '); 
  }
}
