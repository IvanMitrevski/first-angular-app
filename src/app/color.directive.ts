import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: "[colorDirective]"
})
export class ColorDirective {

  // ElementRef is responsible for accessing the DOM element
  constructor(private el: ElementRef) { }

  @Input("colorDirective") color: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.setTextColor(this.color);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.setTextColor(null);
  }

  private setTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
