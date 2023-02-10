import { bindNodeCallback } from 'rxjs';
import fs from 'fs';

export const writeJSON$ = (outputPath: string, data: unknown) =>
  bindNodeCallback(fs.writeFile)(outputPath, JSON.stringify(data, null, 2));
