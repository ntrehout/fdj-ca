import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TeamDetailsPage } from "./team-details.page";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('TeamDetailsPage', () => {
  let component: TeamDetailsPage;
  let fixture: ComponentFixture<TeamDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamDetailsPage, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
