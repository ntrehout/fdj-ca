import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LeagueService } from "../../services/league/league.service";
import { PageComponent } from "../../core/components/page/page.component";
import { BehaviorSubject, map, switchMap, tap } from "rxjs";
import { LeaguesListComponent } from "../../components/leagues-list/leagues-list.component";
import { GetAllQueryParams, ILeague } from "@fdj-ca/shared-models";
import { createNextPage, createPreviousPage } from "../../utils/query.utils";
import { SearchableLayoutService } from "../../layouts/searchable/searchable-layout.service";

export const INITIAL_QUERY: GetAllQueryParams<ILeague> = {
  limit: 10,
  page: 0,
  sort: 'asc',
};

@Component({
  selector: 'fdj-ca-leagues-page',
  standalone: true,
  imports: [CommonModule, LeaguesListComponent],
  templateUrl: './leagues.page.html',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesPage extends PageComponent {
  private readonly _leagueService = inject(LeagueService);
  private readonly _searchableLayoutService = inject(SearchableLayoutService);
  private readonly query$ = new BehaviorSubject(INITIAL_QUERY);
  override VM$ = this.query$.pipe(
    switchMap((query) =>
      this._searchableLayoutService
        .onSortChange$()
        .pipe(map((sort) => ({ ...query, sort })))
    ),
    switchMap((query) =>
      this._searchableLayoutService.onLimitChange$().pipe(
        map((limit) => ({
          ...query,
          limit,
          page: limit !== query.limit ? 0 : query.page,
        }))
      )
    ),
    tap(() => this.setLoading(true)),
    map((query) => ({
      query,
      leagues$: this._searchableLayoutService.onSearch$.pipe(
        switchMap((search) =>
          this._leagueService
            .getAll({ ...query, ...(search ? { name: search } : {}) })
            .pipe(tap(() => this.setLoading(false)))
        )
      ),
    }))
  );

  nextPage = (query: GetAllQueryParams<ILeague>) =>
    createNextPage(query, this.query$);
  previousPage = (query: GetAllQueryParams<ILeague>) =>
    createPreviousPage(query, this.query$);
  setLimit = (query: GetAllQueryParams<ILeague>, limit: number) =>
    this.query$.next({ ...query, limit });
}
