import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface DrawerTemplate<T, O> {
  ref: TemplateRef<T>;
  context: Record<string, O>;
}
@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  private readonly _isOpen$ = new BehaviorSubject(false);
  // eslint-disable-next-line rxjs/no-explicit-generics
  private readonly _template$ = new BehaviorSubject<
    DrawerTemplate<unknown, unknown> | undefined
  >(undefined);

  isOpen$() {
    return this._isOpen$.asObservable();
  }

  getTemplate$() {
    return this._template$.asObservable();
  }

  setState(state: 'open' | 'close') {
    this._isOpen$.next(state === 'open');
  }

  setTemplate(ref: TemplateRef<unknown>, context: Record<string, unknown>) {
    this._template$.next({
      ref,
      context,
    });
  }
}
