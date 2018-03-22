import {
  Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef,
  ComponentRef, ComponentFactoryResolver, Renderer, AfterViewInit
} from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Directive({
  selector: '[appButtonDirective]',
})
export class ButtonDirectiveDirective {

  private button: ComponentRef<ButtonComponent>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private elRef: ElementRef,
    private renderer: Renderer
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setElementClass(this.elRef.nativeElement, 'ps-tooltip-trigger', true); // ok

    // factory comp resolver
    const factory = this.resolver.resolveComponentFactory(ButtonComponent);

    // create component
    this.button = this.viewContainerRef.createComponent(factory);
    console.log(this.button);

    // set content of the component
    this.elRef.nativeElement.appendChild(this.button.location.nativeElement);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elRef.nativeElement.style.backgroundColor = null;
  }

}
