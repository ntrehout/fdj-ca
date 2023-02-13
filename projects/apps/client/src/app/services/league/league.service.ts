import { Injectable } from "@angular/core";
import { CrudService } from "../../core/services/crud/crud.service";
import { GetAllQueryParams, ILeague, Response } from "@fdj-ca/shared-models";

@Injectable({
  providedIn: 'root',
})
export class LeagueService extends CrudService<ILeague & { _id: string }> {
  override getAll(query: GetAllQueryParams<ILeague> & { name?: string }) {
    return this._http.get<Response<(ILeague & { _id: string })[]>>(
      '/api/leagues',
      { params: query }
    );
  }

  override getOneByID(id: string) {
    return this._http.get<Response<ILeague & { _id: string }>>(
      `/api/leagues/${id}`
    );
  }
}
