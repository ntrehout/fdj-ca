import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LeagueDetailsPage } from "./league-details.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('LeagueDetailsPage', () => {
  let component: LeagueDetailsPage;
  let fixture: ComponentFixture<LeagueDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LeagueDetailsPage,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
