import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSortAsc, faSortDesc } from "@fortawesome/free-solid-svg-icons";
import { SearchableLayoutService } from "./searchable-layout.service";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'fdj-ca-searchable-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './searchable.layout.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchableLayout {
  service = inject(SearchableLayoutService);
  faAscending = faSortAsc;
  faDescending = faSortDesc;
}
