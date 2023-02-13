import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'fdj-ca-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.page.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {}
