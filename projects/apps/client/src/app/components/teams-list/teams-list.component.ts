import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ITeam } from "@fdj-ca/shared-models";
import { RouterLink } from "@angular/router";
import { IsInViewportDirective } from "../../core/directives/is-in-viewport/is-in-viewport.directive";

@Component({
  selector: 'fdj-ca-teams-list',
  standalone: true,
  imports: [CommonModule, RouterLink, IsInViewportDirective],
  templateUrl: './teams-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsListComponent {
  @Input() teams: ITeam[] = [];
}
