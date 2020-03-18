import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HothComponent } from './hoth.component';

describe('HothComponent', () => {
  let component: HothComponent;
  let fixture: ComponentFixture<HothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
