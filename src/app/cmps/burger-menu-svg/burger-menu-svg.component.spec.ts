import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerMenuSvgComponent } from './burger-menu-svg.component';

describe('BurgerMenuSvgComponent', () => {
  let component: BurgerMenuSvgComponent;
  let fixture: ComponentFixture<BurgerMenuSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerMenuSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BurgerMenuSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
