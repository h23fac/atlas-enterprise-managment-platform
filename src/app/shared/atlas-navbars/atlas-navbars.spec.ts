import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasNavbars } from './atlas-navbars';

describe('AtlasNavbars', () => {
  let component: AtlasNavbars;
  let fixture: ComponentFixture<AtlasNavbars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasNavbars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasNavbars);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
