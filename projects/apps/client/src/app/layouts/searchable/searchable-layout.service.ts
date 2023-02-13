import { Injectable } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BehaviorSubject, debounceTime, distinctUntilChanged, shareReplay, startWith, tap } from "rxjs";

export const INITIAL_SORT: 'asc' | 'desc' = 'asc';
export const INITIAL_LIMIT = 10;

@Injectable({
  providedIn: 'root',
})
export class SearchableLayoutService {
  private readonly _searchForm = new FormControl('');
  onSearch$ = this._searchForm.valueChanges.pipe(
    startWith(this._searchForm.value),
    distinctUntilChanged(),
    debounceTime(300),
    shareReplay({ bufferSize: 1, refCount: false }),
    tap((value) => console.log('search', value))
  );
  private readonly _sort$ = new BehaviorSubject(INITIAL_SORT);
  private readonly _limit$ = new BehaviorSubject(INITIAL_LIMIT);

  onSortChange$() {
    return this._sort$.asObservable();
  }
  setSort(sort: 'asc' | 'desc') {
    this._sort$.next(sort);
  }
  onLimitChange$() {
    return this._limit$.asObservable();
  }

  setLimit(limit: number) {
    this._limit$.next(limit);
  }

  getForm() {
    return this._searchForm;
  }
}
