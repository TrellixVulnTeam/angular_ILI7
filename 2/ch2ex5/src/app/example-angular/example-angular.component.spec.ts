import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAngularComponent } from './example-angular.component';

describe('ExampleAngularComponent', () => {
  let component: ExampleAngularComponent;
  let fixture: ComponentFixture<ExampleAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
