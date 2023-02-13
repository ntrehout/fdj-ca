import { Injectable } from "@angular/core";
import { CrudService } from "../../core/services/crud/crud.service";
import { ITeam, Response } from "@fdj-ca/shared-models";
import { map, zip } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TeamService extends CrudService<ITeam> {
  override getAll() {
    return this._http.get<Response<ITeam[]>>('/api/teams');
  }

  override getOneByID(id: string) {
    return this._http.get<Response<ITeam>>(`/api/teams/${id}`);
  }

  override getManyByIDs(ids: string[]) {
    return zip(...ids.map((id) => this.getOneByID(id))).pipe(
      map(
        (responses) =>
          ({
            success: true,
            data: responses.map((response) =>
              response.success ? response.data : null
            ),
            statusCode: responses[0].statusCode,
          } as Response<ITeam[]>)
      )
    );
  }

  getManyByLeagueID(leagueID: string) {
    return this._http.get<Response<ITeam[]>>(`/api/teams?leagueID=${leagueID}`);
  }
}
