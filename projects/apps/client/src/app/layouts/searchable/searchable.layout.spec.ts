import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchableLayout } from "./searchable.layout";

describe('SearchableLayout', () => {
  let component: SearchableLayout;
  let fixture: ComponentFixture<SearchableLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchableLayout],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchableLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
