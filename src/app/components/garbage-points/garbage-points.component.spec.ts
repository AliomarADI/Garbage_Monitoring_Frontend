import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbagePointsComponent } from './garbage-points.component';

describe('GarbagePointsComponent', () => {
  let component: GarbagePointsComponent;
  let fixture: ComponentFixture<GarbagePointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbagePointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbagePointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
