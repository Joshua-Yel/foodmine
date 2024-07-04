import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';// Import the sample_foods array
import { Food } from '../../../shared/models/Food';
import { sample_foods } from '../../../../data';
import { Tag } from '../../../shared/models/Tag';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  
  tags?:Tag[];

  constructor(foodService:FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

  
  
}
