import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import * as AOS from 'aos';
import Swiper from 'swiper';
import GLightbox from 'glightbox';
import Isotope from 'isotope-layout';
import { HeaderOtherPageComponent } from './header-other-page/header-other-page.component';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderOtherPageComponent,
    FooterComponent,
    RouterOutlet,
    NgIf,
  ],
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../assets/css/rtl.css',
    '../assets/css/style.css',
  ],
})
export class AppComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
      });

    // Init AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Init Swiper (بسته به نیاز، ممکنه نمونه‌سازی خاص بخواد)
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // Init GLightbox
    GLightbox({
      selector: '.glightbox',
    });

    // Init Isotope
    const iso = new Isotope('.grid', {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    });
  }
}
