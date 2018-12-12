import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeicesterComponent } from './leicester.component';

describe('LeicesterComponent', () => {
  let component: LeicesterComponent;
  let fixture: ComponentFixture<LeicesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeicesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeicesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
