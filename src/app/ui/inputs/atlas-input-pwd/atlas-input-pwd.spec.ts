import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtlasInputPwd } from './atlas-input-pwd';

describe('AtlasInputPwd', () => {
  let component: AtlasInputPwd;
  let fixture: ComponentFixture<AtlasInputPwd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtlasInputPwd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtlasInputPwd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
