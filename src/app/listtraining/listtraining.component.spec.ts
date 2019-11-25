import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtrainingComponent } from './listtraining.component';

describe('ListtrainingComponent', () => {
  let component: ListtrainingComponent;
  let fixture: ComponentFixture<ListtrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
