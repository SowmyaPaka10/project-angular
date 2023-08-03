/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
}*/

// import { Component ,ElementRef} from '@angular/core';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Angular POC';

//   constructor(private elementRef: ElementRef,  public  _router: Router) { }

//   ngOnInit() {

//     var s = document.createElement("script");
//     s.type = "text/javascript";
//     s.src = "../assets/js/main.js";
//     this.elementRef.nativeElement.appendChild(s);
// }
// }

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar/sidebar.component';
import { HttpconsumeService } from './httpconsume.service';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
showHeader: boolean = true;
showSidebar: boolean = true;
showFooter: boolean = true;

constructor(private router: Router, private service:HttpconsumeService) {}

ngOnInit() {
// Subscribe to router events to check the current route and hide/show layout components accordingly
this.router.events.subscribe((event) => {
if (event instanceof NavigationEnd) {
const currentRoute = this.router.url;
this.showHeader = !currentRoute.includes('/login') && !currentRoute.includes('/register') && !currentRoute.includes('/error-404'); // Hide header on the login page
this.showSidebar = !currentRoute.includes('/login') && !currentRoute.includes('/register') && !currentRoute.includes('/error-404'); // Hide sidebar on the login page
this.showFooter = !currentRoute.includes('/login') && !currentRoute.includes('/register') && !currentRoute.includes('/error-404'); // Always show the footer  true;
}
});
}
  ngAfterViewInit(): void {
    this.sidebar.sidebarToggled.subscribe(() =>{
      this.onToggleSidebar();
    });
    }
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;
  onToggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
