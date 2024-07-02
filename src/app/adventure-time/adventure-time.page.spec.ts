import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdventureTimePage } from './adventure-time.page';

describe('AdventureTimePage', () => {
  let component: AdventureTimePage;
  let fixture: ComponentFixture<AdventureTimePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdventureTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
