import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ILeague } from "@fdj-ca/shared-models";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'fdj-ca-leagues-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './leagues-list.component.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesListComponent {
  @Input() leagues: (ILeague & { _id: string })[] = [];
}
