import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedBookLogComponent } from './issued-book-log.component';

describe('IssuedBookLogComponent', () => {
  let component: IssuedBookLogComponent;
  let fixture: ComponentFixture<IssuedBookLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedBookLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedBookLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
