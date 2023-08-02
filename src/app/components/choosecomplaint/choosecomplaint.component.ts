import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choosecomplaint',
  templateUrl: './choosecomplaint.component.html',
  styleUrls: ['./choosecomplaint.component.css']
})
export class ChoosecomplaintComponent implements OnInit{ 
  ngOnInit(): void {  
      if (localStorage.getItem('title') !=' نوع الشكوي ') { 
        localStorage.setItem('title',' نوع الشكوي '); 
        location.reload() 
      } 
    const complainBoxElements: NodeListOf<HTMLElement> = document.querySelectorAll('.container-body > div');
complainBoxElements.forEach((element: HTMLElement) => {
  /// add style to div 
 element.addEventListener('mouseenter',function(){
    element.classList.add('box-success');
  }) ;
  // remove style 
element.addEventListener('mouseleave',function(){
  element.classList.remove('box-success');
}) ;

// add style when click
element.addEventListener('click',function (event) {
  const clickedBox = event.target;

  // Add "box-success" class to the clicked box
  element.classList.add('box-success'); 
  // Remove "box-success" class from other boxes 
    if (element !== clickedBox) {
      element.classList.remove('box-success');
    } 
})
});
}

}
