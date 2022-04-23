import { Component, HostListener, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private titleService: Title, private router: Router, private activePage: ActivatedRoute) { }
  @HostListener("window:scroll", []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset = window.pageYOffset  || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //console.log(verticalOffset);
    let toolbar = document.querySelector('.toolbar') 
    if (verticalOffset > 300) {
      console.log(verticalOffset)
    toolbar?.classList.add('scrolled')
    } else {
      toolbar?.classList.remove('scrolled')
    }
      }
  ngOnInit(): void {
  }
  
  toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar?.classList.add('open');
  }
  closeSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar?.classList.remove('open')
  }

}
