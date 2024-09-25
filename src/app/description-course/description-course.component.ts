import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-description-course',
  standalone: true,
  imports: [
    // otros módulos
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  templateUrl: './description-course.component.html',
  styleUrl: './description-course.component.css',
  
})
export class DescriptionCourseComponent {
  ngAfterViewInit() {
    // Aquí puedes hacer ajustes en la vista después de que esté renderizada
  }
}
