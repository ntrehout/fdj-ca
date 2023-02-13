import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BehaviorSubject, EMPTY, map, Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";

@UntilDestroy()
@Component({
  selector: 'fdj-ca-page',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>page works!</p> `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent {
  private readonly _isLoading$ = new BehaviorSubject(true);
  private readonly _route = inject(ActivatedRoute);
  protected readonly VM$: Observable<unknown> = EMPTY;
  getParams$ = this._route.params;
  isLoading() {
    return this._isLoading$.pipe();
  }

  setLoading(isLoading: boolean) {
    this._isLoading$.next(isLoading);
  }

  getParam = (key: string): Observable<string> =>
    this.getParams$.pipe(
      map((params) => params[key]),
      untilDestroyed(this)
    );
}
