import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BespinComponent } from './bespin.component';

describe('BespinComponent', () => {
  let component: BespinComponent;
  let fixture: ComponentFixture<BespinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BespinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BespinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
