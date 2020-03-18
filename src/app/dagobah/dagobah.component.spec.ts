import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DagobahComponent } from './dagobah.component';

describe('DagobahComponent', () => {
  let component: DagobahComponent;
  let fixture: ComponentFixture<DagobahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DagobahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DagobahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
