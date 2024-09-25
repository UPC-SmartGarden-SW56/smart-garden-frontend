import {AfterViewInit, Component, inject, Input, OnInit, ViewChild} from '@angular/core';
import {CourseCreateComponent} from "../../components/course-create/course-create.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatSort} from "@angular/material/sort";
import {MatIcon} from "@angular/material/icon";
import {Course} from "../../model/course.entity";
import {MatTableDataSource} from "@angular/material/table";
import {CourseService} from "../../services/course.service";
import {MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {CourseFilterComponent} from "../../components/course-filter/course-filter.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-courses-view',
  standalone: true,
  imports: [
    CourseCreateComponent,
    MatCard,
    MatSort,
    MatCardTitle,
    MatIcon,
    MatIconButton,
    MatCardHeader,
    MatToolbar,
    CourseFilterComponent,
    NgForOf,
    MatCardContent,
    RouterLink
  ],
  templateUrl: './courses-view.component.html',
  styleUrl: './courses-view.component.css'
})
export class CoursesViewComponent implements OnInit{
  @Input() courses: Course[]=[];
  filteredCourses: Course[] = [];
  currentLevel: string = 'Basic';

  constructor(
    private courseService: CourseService,
  ) {}
  ngOnInit() {
    this.getAllCourses();
  }
  private getAllCourses(){
    this.courseService.getAll().subscribe((response: any) =>{
      this.courses = response;
      this.applyFilters();
      console.log(this.courses);
    });
  }

  filterByLevel(level: string){
    this.currentLevel = level;
    this.applyFilters();
  }

  private applyFilters(){
    this.filteredCourses=this.courses.filter(course => {
      const matchesLevel = this.currentLevel === 'Basic' || course.level === this.currentLevel;
      return matchesLevel;
    });
  }
}

