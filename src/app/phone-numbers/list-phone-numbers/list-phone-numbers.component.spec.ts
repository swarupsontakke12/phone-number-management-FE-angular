import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhoneNumbersComponent } from './list-phone-numbers.component';

describe('ListPhoneNumbersComponent', () => {
  let component: ListPhoneNumbersComponent;
  let fixture: ComponentFixture<ListPhoneNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPhoneNumbersComponent]
    });
    fixture = TestBed.createComponent(ListPhoneNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
