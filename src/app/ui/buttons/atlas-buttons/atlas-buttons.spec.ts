import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasButtonConfirm } from './atlas-buttons';

describe('AtlasButtonConfirm', () => {
  let component: AtlasButtonConfirm;
  let fixture: ComponentFixture<AtlasButtonConfirm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasButtonConfirm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasButtonConfirm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
