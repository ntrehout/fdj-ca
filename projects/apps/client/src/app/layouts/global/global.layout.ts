import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { DrawerComponent } from "@fdj-ca/components";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faHomeAlt, faTrophy, faUsers } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'fdj-ca-global-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DrawerComponent,
    RouterLink,
    FontAwesomeModule,
    RouterLinkActive,
  ],
  templateUrl: './global.layout.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalLayout {
  faHome = faHomeAlt;
  faTrophy = faTrophy;
  faUsers = faUsers;
}
