import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoOneThingComponent } from './do-one-thing.component';

describe('DoOneThingComponent', () => {
  let component: DoOneThingComponent;
  let fixture: ComponentFixture<DoOneThingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoOneThingComponent]
    });
    fixture = TestBed.createComponent(DoOneThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
