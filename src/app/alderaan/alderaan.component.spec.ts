import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlderaanComponent } from './alderaan.component';

describe('AlderaanComponent', () => {
  let component: AlderaanComponent;
  let fixture: ComponentFixture<AlderaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlderaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlderaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
