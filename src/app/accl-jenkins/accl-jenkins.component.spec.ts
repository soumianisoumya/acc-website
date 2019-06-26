import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcclJenkinsComponent } from './accl-jenkins.component';

describe('AcclJenkinsComponent', () => {
  let component: AcclJenkinsComponent;
  let fixture: ComponentFixture<AcclJenkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcclJenkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcclJenkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
