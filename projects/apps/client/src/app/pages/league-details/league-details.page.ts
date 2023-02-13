import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PageComponent } from "../../core/components/page/page.component";
import { LeagueService } from "../../services/league/league.service";
import { TeamService } from "../../services/team/team.service";
import { map, switchMap, tap } from "rxjs";
import { RouterLink } from "@angular/router";
import { IsInViewportDirective } from "../../core/directives/is-in-viewport/is-in-viewport.directive";
import { TeamsListComponent } from "../../components/teams-list/teams-list.component";

@Component({
  selector: 'fdj-ca-league-details-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IsInViewportDirective,
    TeamsListComponent,
  ],
  templateUrl: './league-details.page.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueDetailsPage extends PageComponent {
  private readonly leagueID$ = this.getParam('id');
  private readonly leagueService = inject(LeagueService);
  private readonly teamService = inject(TeamService);

  override VM$ = this.leagueID$.pipe(
    tap((_) => this.setLoading(true)),
    switchMap((id) =>
      this.leagueService
        .getOneByID(id)
        .pipe(
          switchMap((league) =>
            this.teamService
              .getManyByIDs(league.success ? league.data.teams : [])
              .pipe(map((teams) => ({ teams: teams, league })))
          )
        )
    ),
    tap((_) => this.setLoading(false))
  );
}
