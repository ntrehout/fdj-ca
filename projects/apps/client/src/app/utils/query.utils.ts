import { GetAllQueryParams } from "@fdj-ca/shared-models";
import { Subject } from "rxjs";

export const createNextPage = (
  query: GetAllQueryParams<unknown>,
  subject$: Subject<GetAllQueryParams<unknown>>
) => {
  // TODO: Handle when we reach the end of the list.
  if (query.page === undefined) {
    query.page = 1;
  }
  subject$.next({ ...query, page: query.page + 1 });
};

export const createPreviousPage = (
  query: GetAllQueryParams<unknown>,
  subject$: Subject<GetAllQueryParams<unknown>>
) => {
  if (query.page === undefined) {
    query.page = 1;
  }
  const newPage = query.page - 1;
  subject$.next({ ...query, page: newPage < 0 ? 0 : newPage });
};
