import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredents: Ingredient[] = [new Ingredient('Apple',10 ),new Ingredient('Mango',15 ),];

  constructor() {

  }
}
