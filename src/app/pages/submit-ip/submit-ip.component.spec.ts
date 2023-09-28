import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitIpComponent } from './submit-ip.component';

describe('SubmitIpComponent', () => {
  let component: SubmitIpComponent;
  let fixture: ComponentFixture<SubmitIpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitIpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitIpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
