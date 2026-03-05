import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasDashboard } from './atlas-dashboard';

describe('AtlasDashboard', () => {
  let component: AtlasDashboard;
  let fixture: ComponentFixture<AtlasDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
