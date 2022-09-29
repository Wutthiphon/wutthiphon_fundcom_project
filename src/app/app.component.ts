import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  click_counter = 0;
  in_home = false;

  constructor(public router: Router) { }

  ngOnInit() {
    AOS.init();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (this.router.url == '/') {
          window.addEventListener('scroll', this.scroll, true);
          this.in_home = true;
        } else {
          window.removeEventListener('scroll', this.scroll, true);
          document.body.style.setProperty('--navbar-scroll', "#347355");
          this.in_home = false;
        }
      }
    });
  }

  scroll = (): void => {
    let scrollHeigth;

    if (window.innerWidth < 350) {
      scrollHeigth = 150;
    } else if (window.innerWidth < 500 && window.innerWidth > 350) {
      scrollHeigth = 250;
    } else if (window.innerWidth < 700 && window.innerWidth > 500) {
      scrollHeigth = 350;
    } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
      scrollHeigth = 500;
    } else {
      scrollHeigth = 650;
    }


    if (window.scrollY >= scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "#347355");
    } else if (window.scrollY < scrollHeigth) {
      document.body.style.setProperty('--navbar-scroll', "transparent");
    }
  }

  color_change() {
    if (this.in_home == true) {
      this.click_counter = 0;
      if (this.click_counter == 0) {
        document.body.style.setProperty('--navbar-scroll', "#347355");
        this.click_counter = 1;
      } else {
        document.body.style.setProperty('--navbar-scroll', "transparent");
        this.click_counter = 0;
      }
    }
  }
}
