import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarafuComponent } from './sarafu.component';

describe('SarafuComponent', () => {
  let component: SarafuComponent;
  let fixture: ComponentFixture<SarafuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarafuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarafuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
