import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeonosisComponent } from './geonosis.component';

describe('GeonosisComponent', () => {
  let component: GeonosisComponent;
  let fixture: ComponentFixture<GeonosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeonosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeonosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
