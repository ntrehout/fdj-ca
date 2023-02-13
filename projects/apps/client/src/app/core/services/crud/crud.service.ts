import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GetAllQueryParams, ICrudService, Response } from "@fdj-ca/shared-models";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CrudService<T> implements ICrudService<T> {
  protected readonly _http = inject(HttpClient);

  // TODO: Use DI Token to receive the base route.

  getAll(query: GetAllQueryParams<T>): Observable<Response<T[]>> {
    return of({} as Response<T[]>);
  }

  getManyByIDs(ids: string[]): Observable<Response<T[]>> {
    return of({} as Response<T[]>);
  }

  getManyByName(name: string): Observable<Response<T[]>> {
    return of({} as Response<T[]>);
  }

  getOneByID(id: string): Observable<Response<T>> {
    return of({} as Response<T>);
  }
}
