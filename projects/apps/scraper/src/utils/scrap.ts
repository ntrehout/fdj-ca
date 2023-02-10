import {
  generateFakePlayersForTeam,
  getLeaguesByStrSport,
  getTeamsByLeagueName,
} from './api';
import { concat, delay, map, Observable, switchMap, tap, toArray } from 'rxjs';
import { VM } from '../main';

export const scrapLeaguesTeamsAndPlayers = (limit: number): Observable<VM> =>
  getLeaguesByStrSport(limit).pipe(
    switchMap((leagues) =>
      // We create a stream for each league.
      concat(
        // We create a stream for each team.
        ...leagues.map((league, index) =>
          getTeamsByLeagueName(league.name).pipe(
            map((teams) => ({ ...league, teams })),
            tap(() =>
              console.info(
                `getTeamsByLeagueName: ${index + 1}/${leagues.length}`
              )
            ),
            delay(100) // Rate limit of the API.
          )
        )
      ).pipe(
        map((leagueWithTeams) => ({
          ...leagueWithTeams,
          teams: leagueWithTeams.teams.map((team) => ({
            ...team,
            players: generateFakePlayersForTeam(team),
          })),
        })),
        toArray()
      )
    )
  );
