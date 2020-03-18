import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndorComponent } from './endor.component';

describe('EndorComponent', () => {
  let component: EndorComponent;
  let fixture: ComponentFixture<EndorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
