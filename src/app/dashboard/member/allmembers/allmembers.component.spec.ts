import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmembersComponent } from './allmembers.component';

describe('AllmembersComponent', () => {
  let component: AllmembersComponent;
  let fixture: ComponentFixture<AllmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
