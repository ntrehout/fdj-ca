import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'fdj-ca-players',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './players.page.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersPage {}
