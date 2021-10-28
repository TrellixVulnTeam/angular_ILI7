import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExampleComponent } from './user-example.component';

describe('UserExampleComponent', () => {
  let component: UserExampleComponent;
  let fixture: ComponentFixture<UserExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
