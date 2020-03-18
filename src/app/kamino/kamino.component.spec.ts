import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaminoComponent } from './kamino.component';

describe('KaminoComponent', () => {
  let component: KaminoComponent;
  let fixture: ComponentFixture<KaminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
