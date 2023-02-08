import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'fdj-ca-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div
        id="drawer-example"
        class="fixed shadow-xl z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0"
        [class.-translate-x-full]="(vm.isOpen$ | async) === false"
        tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <ng-container *ngIf="vm.template$ | async as template">
          <ng-container
            [ngTemplateOutlet]="template.ref"
            [ngTemplateOutletContext]="template.context"
          ></ng-container>
        </ng-container>
      </div>
    </ng-container>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerComponent {
  private readonly drawerService = inject(DrawerService);
  vm$ = of({
    isOpen$: this.drawerService.isOpen$(),
    template$: this.drawerService.getTemplate$(),
  });
}
