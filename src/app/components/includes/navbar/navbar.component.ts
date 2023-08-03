import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnChanges, OnInit {
  @Input() title!: string;
  @Input() isAdmin!: boolean;
  ngOnInit(): void {
    if (this.isAdmin) {
      const searchIcon = document.getElementById('search') as HTMLElement;
      const searchInput = document.getElementById(
        'input-search'
      ) as HTMLElement;
      const header = document.getElementById('header') as HTMLElement;
      const searchAppear = document.createElement('div') as HTMLElement;
      header.appendChild(searchAppear);
      if (searchIcon != null) {
        searchIcon.addEventListener('click', function () {
          if (window.innerWidth <= 530) {
            this.parentElement?.classList.add('appearSearchDiv');
            this.parentElement?.classList.remove('search-bar');
            searchInput?.setAttribute(
              'style',
              'background:#f4f4f4 !important;display:block !important;'
            );
            if (this.parentElement)
              searchAppear.appendChild(this.parentElement);
          } else {
            this.parentElement?.classList.remove('appearSearchDiv');
            this.parentElement?.classList.add('search-bar');
          }
        });
      }

      const profile = document.getElementById('profile') as HTMLElement;
      const searchBar = document.querySelector(' .search-bar') as HTMLElement;

      profile.setAttribute('style', 'display: flex !important;');
      searchBar.setAttribute('style', 'display:flex !important;');
    } else {
      const profile = document.getElementById('profile') as HTMLElement;
      const searchBar = document.querySelector(' .search-bar') as HTMLElement;

      profile.setAttribute('style', 'display: none !important;');
      searchBar.setAttribute('style', 'display: none !important;');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.title = changes['title'].currentValue;
    this.isAdmin = changes['isAdmin'].currentValue;
  }
}
