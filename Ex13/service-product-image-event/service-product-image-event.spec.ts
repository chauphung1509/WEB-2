import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProductImageEventComponent } from './service-product-image-event';

describe('ServiceProductImageEvent', () => {
  let component: ServiceProductImageEventComponent;
  let fixture: ComponentFixture<ServiceProductImageEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceProductImageEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceProductImageEventComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
