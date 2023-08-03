import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choosecomplaint',
  templateUrl: './choosecomplaint.component.html',
  styleUrls: ['./choosecomplaint.component.css'],
})
export class ChoosecomplaintComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('title') != ' نوع الشكوي ') {
      localStorage.setItem('title', ' نوع الشكوي ');
      location.reload();
    }
    const complainBoxElements: NodeListOf<HTMLElement> =
      document.querySelectorAll('.container-body > div');
    complainBoxElements.forEach((element: HTMLElement) => {

      // add style to box and button when click
      element.addEventListener('click', function () {
        const button = document.querySelector(
          '.container-confirm'
        ) as HTMLElement;
        // Add "box-success" class to the clicked box
        element.classList.add('box-success');
        // Add style to button
        button.classList.add('able-button');
      });
    });
  }

  goToControlPanel(event: any) {
    if (event.target.classList.contains('able-button')) {
      this.router.navigate(['controlPanel']);
    }
  }
}
