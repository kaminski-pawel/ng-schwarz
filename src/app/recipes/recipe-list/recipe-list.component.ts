import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Śledź w śmietanie', 'Metafizyczne danie',
      'https://3.bp.blogspot.com/-7UM1Vnwks-s/VyZIylkkD5I/AAAAAAAAFOk/yJEA4T9DaBcgNIZIf0bb0RtnBHjTqSpxQCLcB/s1600/1DSC_2875.JPG'),
    new Recipe('Kurczę pieczone', 'O kurczę',
      'https://www.chowstatic.com/assets/recipe_photos/10530_roasted_rosemary_roasted_chicken.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
