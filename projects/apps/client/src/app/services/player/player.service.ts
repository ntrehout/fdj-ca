import { Injectable } from "@angular/core";
import { map, zip } from "rxjs";
import { IPlayer, Response } from "@fdj-ca/shared-models";
import { CrudService } from "../../core/services/crud/crud.service";

@Injectable({
  providedIn: 'root',
})
export class PlayerService extends CrudService<IPlayer> {
  override getOneByID(id: string) {
    return this._http.get<Response<IPlayer & { _id: string }>>(
      `/api/players/${id}`
    );
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
            timestamp: responses[0].timestamp,
          } as Response<IPlayer[]>)
      )
    );
  }
}
