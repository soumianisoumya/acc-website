import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParalaxComponentComponent } from './paralax-component.component';

describe('ParalaxComponentComponent', () => {
  let component: ParalaxComponentComponent;
  let fixture: ComponentFixture<ParalaxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParalaxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParalaxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
