import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GlobalLayout } from "./global.layout";
import { RouterTestingModule } from "@angular/router/testing";

describe('GlobalLayout', () => {
  let component: GlobalLayout;
  let fixture: ComponentFixture<GlobalLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalLayout, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(GlobalLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
