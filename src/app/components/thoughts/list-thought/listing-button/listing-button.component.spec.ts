import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingButtonComponent } from './listing-button.component';

describe('ListingButtonComponent', () => {
  let component: ListingButtonComponent;
  let fixture: ComponentFixture<ListingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
