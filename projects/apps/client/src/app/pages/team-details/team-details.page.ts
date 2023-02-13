import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageComponent } from "../../core/components/page/page.component";
import { TeamService } from "../../services/team/team.service";
import { map, switchMap, tap } from "rxjs";
import { PlayerService } from "../../services/player/player.service";
import { PlayerListComponent } from "../../components/player-list/player-list.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'fdj-ca-team-details-page',
  standalone: true,
  imports: [CommonModule, PlayerListComponent, FontAwesomeModule],
  templateUrl: './team-details.page.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetailsPage extends PageComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faWebsite = faGlobe;
  private readonly teamID$ = this.getParam('id');
  private readonly teamService = inject(TeamService);
  private readonly playerService = inject(PlayerService);
  override VM$ = this.teamID$.pipe(
    tap((_) => this.setLoading(true)),
    switchMap((id) =>
      this.teamService
        .getOneByID(id)
        .pipe(
          switchMap((team) =>
            this.playerService
              .getManyByIDs(team.success ? team.data.players : [])
              .pipe(map((players) => ({ players: players, team: team })))
          )
        )
    ),
    tap((_) => this.setLoading(false))
  );
}
