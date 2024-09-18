import { AfterViewInit, Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  constructor(private render: Renderer2, private element: ElementRef) {}

  @HostListener('window:scroll', [])
  onScroll(e: any) {
  const header = this.element.nativeElement.querySelector('.header');
    if(window.scrollY >= 450){
      this.render.addClass(header, 'scroll');      
    } else if(window.scrollY <= 200){
      this.render.removeClass(header, 'scroll');
    }
  }

  ngAfterViewInit() {
    const subMenuParent = this.element.nativeElement.querySelector('.list-items li:has(.sub-menu)');

    this.render.listen(subMenuParent, 'mouseover', () => {
      const subMenu = subMenuParent.querySelector('.sub-menu');
      this.render.addClass(subMenu, 'subMenu');
    });

    this.render.listen(subMenuParent, 'mouseout', () => {
      const subMenu = subMenuParent.querySelector('.sub-menu');
      this.render.removeClass(subMenu, 'subMenu');
    });
  }

}
