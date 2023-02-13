import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./layouts/searchable/searchable.layout').then(
        (m) => m.SearchableLayout
      ),
    children: [
      {
        path: 'leagues',
        loadComponent: () =>
          import('./pages/leagues/leagues.page').then((m) => m.LeaguesPage),
      },
      {
        path: 'teams',
        loadComponent: () =>
          import('./pages/teams/teams.page').then((m) => m.TeamsPage),
      },
      {
        path: 'players',
        loadComponent: () =>
          import('./pages/players/players.page').then((m) => m.PlayersPage),
      },
    ],
  },
  {
    path: 'leagues/:id',
    loadComponent: () =>
      import('./pages/league-details/league-details.page').then(
        (m) => m.LeagueDetailsPage
      ),
  },
  {
    path: 'teams/:id',
    loadComponent: () =>
      import('./pages/team-details/team-details.page').then(
        (m) => m.TeamDetailsPage
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
