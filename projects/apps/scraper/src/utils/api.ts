import { from, map, Observable, tap } from 'rxjs';
import axios from 'axios';
import { League, Player, Team } from '@fdj-ca/shared-models';
import { League as ThirdPartyLeague } from '../models/league';
import { Team as ThirdPartyTeam } from '../models/team';
import { randFullName, randImg, randNumber, randPastDate } from '@ngneat/falso';

/**
 * Generate 10 random players.
 * @param team
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const generateFakePlayersForTeam = (team: Team): Player[] =>
  [...Array(10)].map(() => ({
    name: randFullName(),
    born: randPastDate(),
    thumbnail: randImg({ category: 'people' }),
    signin: { amount: randNumber({ min: 5643, max: 6547687 }), currency: '$' },
    position: (
      [
        'Forward',
        'Defender',
        'Goalkeeper',
        'Midfielder',
      ] as Player['position'][]
    )[randNumber({ max: 3, min: 0 })],
  }));
/**
 * Get all teams from a league.
 * @param league
 */
export const getTeamsByLeagueName = (league: string): Observable<Team[]> => {
  return from(
    axios.get<{ teams: ThirdPartyTeam[] }>(
      `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${league}`,
      {
        // timeout: 100000,
        // httpsAgent: new https.Agent({ keepAlive: true }),
      }
    )
  ).pipe(
    tap((response) =>
      console.info(
        `getTeamsByLeagueName: ${league}`,
        response.status,
        response.statusText
      )
    ),
    map((response) => response.data.teams || []),
    map((teams) =>
      teams.map((team) => ({
        name: team.strTeam,
        thumbnail: team.strTeamBadge,
        players: [],
        banner: team.strTeamBanner,
        descriptionEN: team.strDescriptionEN,
        descriptionFR: team.strDescriptionFR,
        website: team.strWebsite,
        facebook: team.strFacebook,
        twitter: team.strTwitter,
        instagram: team.strInstagram,
        youtube: team.strYoutube,
        stadium: {
          name: team.strStadium,
          location: team.strStadiumLocation,
          capacity: parseInt(team.intStadiumCapacity, 10),
          thumbnail: team.strStadiumThumb,
        },
      }))
    )
  );
};

/**
 * Get all soccer leagues.
 * @param limit
 */
export const getLeaguesByStrSport = (limit: number): Observable<League[]> =>
  from(
    axios.get<{ leagues: ThirdPartyLeague[] }>(
      'https://www.thesportsdb.com/api/v1/json/3/all_leagues.php'
    )
  ).pipe(
    tap((response) =>
      console.info('getLeaguesByStrSport', response.status, response.statusText)
    ),
    map((res) => res.data.leagues || []),
    map((leagues) =>
      leagues
        .filter((league) => league.strSport === 'Soccer')
        .map(
          (league) =>
            ({
              name: league.strLeague,
              sport: 'soccer',
            } as League)
        )
    ),
    map((leagues) => leagues.slice(0, limit))
  );
