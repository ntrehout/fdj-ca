import { IsInViewportDirective } from "./is-in-viewport.directive";
import { MockDirective, MockInstance } from "ng-mocks";

describe('IsInViewportDirective', () => {
  MockInstance.scope();

  it('should create an instance', () => {
    const directive = MockDirective(IsInViewportDirective);
    expect(directive).toBeTruthy();
  });
});
