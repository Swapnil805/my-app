import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 
  recipes: Recipe[] = [
    new Recipe('Chicken Tandoori','Delicious chicken roasted dish !','https://www.whiskaffair.com/wp-content/uploads/2020/05/Tandoori-Chicken-1-1.jpg'),
    new Recipe('Chicken Tandoori','Delicious chicken roasted dish !','https://www.whiskaffair.com/wp-content/uploads/2020/05/Tandoori-Chicken-1-1.jpg'),
    new Recipe('Chicken Tandoori','Delicious chicken roasted dish !','https://www.whiskaffair.com/wp-content/uploads/2020/05/Tandoori-Chicken-1-1.jpg'),
    new Recipe('Chicken Tandoori','Delicious chicken roasted dish !','https://www.whiskaffair.com/wp-content/uploads/2020/05/Tandoori-Chicken-1-1.jpg')
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
