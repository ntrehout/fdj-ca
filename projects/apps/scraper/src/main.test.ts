import * as scraper from "./main";
import * as mongooseUtils from "./utils/mongoose";
import * as apiUtils from "./utils/api";
import * as fsUtils from "./utils/fs";
import { of } from "rxjs";
import { ILeague, ITeam } from "@fdj-ca/shared-models";

jest.setTimeout(600000);

const mockedAPIUtils = jest.mocked(apiUtils, true);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockedMongooseUtils = jest.mocked(mongooseUtils, true);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockedFsUtils = jest.mocked(fsUtils, true);

describe('Scraper', () => {
  it('should create 1 League + 1 Team + 10 Players', async () => {
    const leagues: ILeague[] = [
      {
        name: 'Ligue 1',
        sport: 'soccer',
        teams: [],
      },
    ];
    const teams: ITeam[] = [
      {
        name: 'Paris Saint-Germain',
      } as ITeam,
    ];
    mockedAPIUtils.getLeaguesByStrSport.mockReturnValue(of(leagues));
    mockedAPIUtils.getTeamsByLeagueName.mockReturnValue(of(teams));
    const result = await scraper.run();
    expect(result).toHaveLength(1);
    result.forEach((league, index) => {
      expect(league['name']).toEqual(leagues[index].name);
      expect(league['teams']).toHaveLength(teams.length);
      league['teams'].forEach((team, index) => {
        expect(team['name']).toEqual(teams[index].name);
        expect(team['players']).toHaveLength(10);
      });
    });
  });
});
