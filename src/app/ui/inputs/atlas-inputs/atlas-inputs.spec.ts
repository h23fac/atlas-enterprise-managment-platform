import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasInputs } from './atlas-inputs';

describe('AtlasInputs', () => {
  let component: AtlasInputs;
  let fixture: ComponentFixture<AtlasInputs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasInputs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasInputs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
