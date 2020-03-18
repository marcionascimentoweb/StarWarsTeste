import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoruscantComponent } from './coruscant.component';

describe('CoruscantComponent', () => {
  let component: CoruscantComponent;
  let fixture: ComponentFixture<CoruscantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoruscantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoruscantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
