import { firstValueFrom, map, of, switchMap, tap } from 'rxjs';
import { connect, insertVMInDatabase } from './utils/mongoose';
import { writeJSON$ } from './utils/fs';
import { scrapLeaguesTeamsAndPlayers } from './utils/scrap';
import { League, Player, Team } from '@fdj-ca/shared-models';

export type VM = Array<
  {
    [Key in keyof Omit<League, 'teams'>]: League[Key];
  } & {
    teams:
      | Array<
          {
            [Key in keyof Omit<Team, 'players'>]: Team[Key];
          } & { players: Player[] | string[] }
        >
      | string[];
  }
>;

export const run = async () => {
  const outputPath = process.argv[2];
  const limit = process.argv[3] ? parseInt(process.argv[3]) : Infinity;
  try {
    // TODO: Scrap and generate DataObject
    return await firstValueFrom(
      scrapLeaguesTeamsAndPlayers(limit).pipe(
        // TODO: Optionally write to a json file
        switchMap((data) =>
          outputPath
            ? writeJSON$(outputPath, data).pipe(map(() => data))
            : of(data)
        ),

        // TODO: Insert into Database
        switchMap((data) =>
          connect().pipe(
            switchMap((connector) => insertVMInDatabase(connector, data))
          )
        ),
        // TODO: Output mongodump command
        tap(() =>
          console.info(
            `mongodump --host=${process.env.MONGODB_HOST} --port=${process.env.MONGODB_PORT} --username=${process.env.MONGODB_USERNAME} --password=${process.env.MONGODB_PASSWORD} --authenticationDatabase=${process.env.MONGODB_DATABASE} --out=dist/dump`
          )
        )
      )
    );
  } catch (error) {
    console.error(error);
  }
};

run();
