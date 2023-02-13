import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LeaguesPage } from "./leagues.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('LeaguesPage', () => {
  let component: LeaguesPage;
  let fixture: ComponentFixture<LeaguesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguesPage, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
