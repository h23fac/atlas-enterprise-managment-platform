import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasLinks } from './atlas-links';

describe('AtlasLinks', () => {
  let component: AtlasLinks;
  let fixture: ComponentFixture<AtlasLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
