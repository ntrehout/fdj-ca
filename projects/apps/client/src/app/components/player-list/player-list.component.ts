import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IPlayer } from "@fdj-ca/shared-models";
import { IsInViewportDirective } from "../../core/directives/is-in-viewport/is-in-viewport.directive";

@Component({
  selector: 'fdj-ca-player-list',
  standalone: true,
  imports: [CommonModule, IsInViewportDirective],
  templateUrl: './player-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerListComponent {
  @Input() players: IPlayer[] = [];
}
