import { Component, NgModule, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {RatingModule} from 'ng-starrating';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { AppRoutingModule } from '../../../app.routes';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NotFoundComponent, NgFor, NgIf, AppRoutingModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    let foodsObservable:Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
        foodsObservable = this.foodService.getAllFoodsByTags(params.tag)
      else
        foodsObservable = foodService.getAll();

        foodsObservable.subscribe((serverFoods) => {
          this.foods = serverFoods;
        })
    })
  }

  ngOnInit(): void {
    
  }
}
