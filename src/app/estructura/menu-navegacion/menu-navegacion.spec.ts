import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuNavegacion } from './menu-navegacion';

describe('MenuNavegacion', () => {
  let component: MenuNavegacion;
  let fixture: ComponentFixture<MenuNavegacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuNavegacion],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuNavegacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
