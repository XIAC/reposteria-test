import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoIndividual } from './producto-individual';

describe('ProductoIndividual', () => {
  let component: ProductoIndividual;
  let fixture: ComponentFixture<ProductoIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoIndividual],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoIndividual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
