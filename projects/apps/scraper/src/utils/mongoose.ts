import { from, of, switchMap, tap, zip } from 'rxjs';
import mongoose, { Schema } from 'mongoose';
import { League, Player, Team } from '@fdj-ca/shared-models';
import { VM } from '../main';

export const connect = () =>
  from(
    mongoose.connect(
      `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`,
      {
        auth: {
          username: process.env.MONGODB_USERNAME,
          password: process.env.MONGODB_PASSWORD,
        },
      }
    )
  ).pipe(
    tap((mongoose) =>
      console.info(
        'Connected to MongoDB',
        mongoose.connection.host,
        mongoose.connection.port,
        mongoose.connection.name
      )
    )
  );

const Players = mongoose.model('players', new Schema({}, { strict: false }));
export const createPlayers = (connection: typeof mongoose, players: Player[]) =>
  from(Players.insertMany(players)).pipe(
    tap((players) => console.info('Created players', players.length))
  );

const Teams = mongoose.model('teams', new Schema({}, { strict: false }));
export const createTeam = (
  connection: typeof mongoose,
  team: Team,
  playerIDs: string[]
) => {
  console.info('Creating team', team.name);
  return from(
    Teams.create({
      ...team,
      ...(playerIDs.length ? { players: playerIDs } : {}),
    })
  );
};

const Leagues = mongoose.model('leagues', new Schema({}, { strict: false }));

export const createLeague = (
  connection: typeof mongoose,
  league: League,
  teamIDs: string[]
) => {
  console.info('Creating league', league.name);
  return from(
    Leagues.create({ ...league, ...(teamIDs.length ? { teams: teamIDs } : {}) })
  );
};

export const insertVMInDatabase = (connector: typeof mongoose, leagues: VM) =>
  zip(
    ...leagues.map((league) =>
      (league.teams.length > 0
        ? zip(
            ...league.teams.map((team) =>
              createPlayers(connector, team.players).pipe(
                switchMap((players) =>
                  createTeam(
                    connector,
                    team,
                    players.flatMap((player) => player._id as string)
                  )
                )
              )
            )
          )
        : of([])
      ).pipe(
        switchMap((teams) =>
          createLeague(
            connector,
            league,
            teams.flatMap((team) => team._id as string)
          )
        )
      )
    )
  );
