import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFoodComponent } from './item-food.component';

describe('ItemFoodComponent', () => {
  let component: ItemFoodComponent;
  let fixture: ComponentFixture<ItemFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
