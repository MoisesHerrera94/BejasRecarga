import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDrinkComponent } from './item-drink.component';

describe('ItemDrinkComponent', () => {
  let component: ItemDrinkComponent;
  let fixture: ComponentFixture<ItemDrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDrinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
