import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarbageRegisterComponent } from './garbage-register.component';

describe('GarbageRegisterComponent', () => {
  let component: GarbageRegisterComponent;
  let fixture: ComponentFixture<GarbageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarbageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarbageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
