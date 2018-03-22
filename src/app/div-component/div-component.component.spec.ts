import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivComponentComponent } from './div-component.component';

describe('DivComponentComponent', () => {
  let component: DivComponentComponent;
  let fixture: ComponentFixture<DivComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
