import { Component, AfterViewInit } from '@angular/core';

declare var AOS: any;
declare var Typed: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Init animations after view is ready
    AOS.init();

    new Typed('.typed', {
      strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  }
}
