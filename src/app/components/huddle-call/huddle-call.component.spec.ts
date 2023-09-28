import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuddleCallComponent } from './huddle-call.component';

describe('HuddleCallComponent', () => {
  let component: HuddleCallComponent;
  let fixture: ComponentFixture<HuddleCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuddleCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HuddleCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
