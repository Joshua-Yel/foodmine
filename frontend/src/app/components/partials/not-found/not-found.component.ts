import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'] 
})
export class NotFoundComponent implements OnInit {
  @Input() visible = false;
  @Input() notFoundMessage = "Nothing Found!";
  @Input() resetLinkText = "Reset";
  @Input() resetLinkRoute = "/";
  
  constructor() { }

  ngOnInit(): void { }
}
