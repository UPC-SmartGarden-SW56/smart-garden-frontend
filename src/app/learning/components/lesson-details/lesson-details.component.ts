import { Component } from '@angular/core';
import {MatCard} from "@angular/material/card";
import {NgStyle} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [
    MatCard,
    NgStyle,
    MatDivider,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent {

}
