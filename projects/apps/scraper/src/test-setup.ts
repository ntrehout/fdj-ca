import { of } from 'rxjs';
import * as mongooseUtils from './utils/mongoose';
import * as apiUtils from './utils/api';
import * as fsUtils from './utils/fs';
import mongoose, { HydratedDocument } from 'mongoose';
import { ILeague, IPlayer, ITeam } from '@fdj-ca/shared-models';

jest.mock(
  './utils/fs',
  () =>
    ({
      writeJSON$: jest.fn().mockImplementation(() => of({})),
    } as typeof fsUtils)
);

jest.mock('./utils/api', () => {
  const original = jest.requireActual('./utils/api');
  return {
    ...original,
    getTeamsByLeagueName: jest.fn().mockImplementation(() => of([])),
    getPlayersByTeamName: jest.fn().mockImplementation(() => of([])),
    getLeaguesByStrSport: jest.fn().mockImplementation(() => of([])),
  } as typeof apiUtils;
});

jest.mock('./utils/mongoose', () => {
  const original = jest.requireActual('./utils/mongoose');
  return {
    ...original,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    connect: (...args: Parameters<(typeof mongooseUtils)['connect']>) =>
      of({} as typeof mongoose),
    createTeam: (...args: Parameters<(typeof mongooseUtils)['createTeam']>) =>
      of({ ...args[1] } as HydratedDocument<ITeam, unknown, unknown>),
    createPlayers: (
      ...args: Parameters<(typeof mongooseUtils)['createPlayers']>
    ) => of([...args[1]] as HydratedDocument<IPlayer, unknown, unknown>[]),
    createLeague: (
      ...args: Parameters<(typeof mongooseUtils)['createLeague']>
    ) => of({ ...args[1] } as HydratedDocument<ILeague, unknown, unknown>),
    insertVMInDatabase: (
      ...args: Parameters<(typeof mongooseUtils)['insertVMInDatabase']>
    ) => of([...args[1]]),
  } as typeof mongooseUtils;
});
