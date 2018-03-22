import {
  Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef, OnInit,
  ComponentRef, ComponentFactoryResolver, AfterViewInit
} from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Directive({
  selector: '[appButtonDirective]',
})
export class ButtonDirectiveDirective implements OnInit {

  private button: ComponentRef<ButtonComponent>;
  elemPosition: any;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private elRef: ElementRef,
  ) { }


  ngOnInit() {
    // factory comp resolver
    const factory = this.resolver.resolveComponentFactory(ButtonComponent);
    // create component
    this.button = this.viewContainerRef.createComponent(factory);
    console.log(this.button);
    // set content of the component
    this.button.instance.show = false;
    this.elRef.nativeElement.appendChild(this.button.location.nativeElement);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.button.instance.show = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.button.instance.show = false;
  }

  getElemPosition() {
    this.elemPosition = this.elRef.nativeElement.getBoundingClientRect();
  }

  setPosition() {
    const elemHeight = this.elRef.nativeElement.offsetHeight;
    const elemWidth = this.elRef.nativeElement.offsetWidth;
    const scrollY = window.pageYOffset;
    let placement: any;
    if (this.placement === 'top') {
      this.button.style.top = (this.elemPosition.top + scrollY) + 'px';
    }

    if (this.placement === 'bottom') {
      this.tooltip.style.top = (this.elemPosition.top + scrollY) + elemHeight + this.tooltipOffset + 'px';
    }

    if (this.placement === 'top' || this.placement === 'bottom') {
      this.tooltip.style.left = (this.elemPosition.left + elemWidth / 2) - tooltipWidth / 2 + 'px';
    }

    if (this.placement === 'left') {
      this.tooltip.style.left = this.elemPosition.left - tooltipWidth - this.tooltipOffset + 'px';
    }

    if (this.placement === 'right') {
      this.tooltip.style.left = this.elemPosition.left + elemWidth + this.tooltipOffset + 'px';
    }

    if (this.placement === 'left' || this.placement === 'right') {
      this.tooltip.style.top = (this.elemPosition.top + scrollY) + elemHeight / 2 - this.tooltip.clientHeight / 2 + 'px';
    }
  }
}
