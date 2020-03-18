import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NabooComponent } from './naboo.component';

describe('NabooComponent', () => {
  let component: NabooComponent;
  let fixture: ComponentFixture<NabooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NabooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NabooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
