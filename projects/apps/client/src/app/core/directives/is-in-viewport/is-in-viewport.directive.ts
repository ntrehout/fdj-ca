import { AfterViewInit, ChangeDetectorRef, Directive, HostBinding, Input, ViewContainerRef } from "@angular/core";

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[isInViewport]',
  standalone: true,
})
export class IsInViewportDirective implements AfterViewInit {
  @Input()
  classWhenInViewport: string[] = [];
  @Input()
  classWhenOutViewport: string[] | undefined;
  @Input() srcWhenInViewport: string | undefined;

  @Input() shouldRemoveClassesWhenNotIntersecting = false;

  @HostBinding('class') class: string[] = [];

  constructor(
    private vcRef: ViewContainerRef,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    // TODO: Create a IntersectionObserverService.
    const observedElement = this.vcRef.element.nativeElement.parentElement;

    const observer = new IntersectionObserver(([entry]) => {
      this.applyOrRemove(entry.isIntersecting);
    });
    observer.observe(observedElement);
  }

  applyOrRemove(isIntersecting: boolean) {
    if (isIntersecting) {
      this.class = this.classWhenInViewport;
      if (!this.vcRef.element.nativeElement.src) {
        this.vcRef.element.nativeElement.src = this.srcWhenInViewport;
      }
    } else if (this.shouldRemoveClassesWhenNotIntersecting) {
      this.class = [];
    } else if (this.classWhenOutViewport) {
      this.class = this.classWhenOutViewport;
    }
    this.cdRef.markForCheck();
  }
}
