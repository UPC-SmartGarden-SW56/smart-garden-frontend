import { Component, Inject, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit{
  redirectUrl: string = '/explore';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.redirectUrl = params['redirectUrl'] || '/explore';
      setTimeout(()=>{
        this.router.navigate([this.redirectUrl]);
      });
    });
  }
  onGoBack(): void {
    this.router.navigate([this.redirectUrl]);
  }
}
