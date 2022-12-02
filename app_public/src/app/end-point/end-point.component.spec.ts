import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndPointComponent } from './end-point.component';

describe('EndPointComponent', () => {
  let component: EndPointComponent;
  let fixture: ComponentFixture<EndPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
