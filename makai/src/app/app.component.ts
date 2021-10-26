import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { transformBottom } from './animations/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('transformBottom', [
      transition(':enter', [
        useAnimation(transformBottom, {
          params: {
            translate1: '0',
            translate2: '-120vh',
            time: '1300ms ease-in',
            translateValue: 'translateY',
            translateValue1: 'translateY'
          }
        })
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  absoluteWrapp: boolean = true;
  change: boolean = false;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.absoluteWrapp = false;
    }, 1300);
  }
}
