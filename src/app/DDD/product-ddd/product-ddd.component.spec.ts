import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDddComponent } from './product-ddd.component';

describe('ProductDddComponent', () => {
  let component: ProductDddComponent;
  let fixture: ComponentFixture<ProductDddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
