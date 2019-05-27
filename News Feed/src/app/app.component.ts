import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('NewsFeedHeader') header: ElementRef;
  @HostListener('window:scroll') onScroll() {
    const sticky = this.header.nativeElement.offsetTop;
    if (window.pageYOffset > sticky) {
      this.header.nativeElement.classList.add('sticky');
    } else {
      this.header.nativeElement.classList.remove('sticky');
    }
  }
}
