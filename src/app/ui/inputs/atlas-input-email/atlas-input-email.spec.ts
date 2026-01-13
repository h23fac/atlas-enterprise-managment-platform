import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasInputEmail } from './atlas-input-email';

describe('AtlasInputEmail', () => {
  let component: AtlasInputEmail;
  let fixture: ComponentFixture<AtlasInputEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasInputEmail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasInputEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
