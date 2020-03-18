import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YavinIVComponent } from './yavin-iv.component';

describe('YavinIVComponent', () => {
  let component: YavinIVComponent;
  let fixture: ComponentFixture<YavinIVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YavinIVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YavinIVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
